import * as React from 'react';
import galvanite from "../galvanite";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
import Highlight from './Highlight';

import { EventNote } from '@material-ui/icons';
require("firebase/database");

interface IMyWorkProps {
}

interface IPostNodeData {
  post: {
    owner: string,
    shortcode: string,
    display_url: string,
    thumbnail_src: string,
    caption: string
  }
}
interface MediaProps {
  loading?: boolean,
  data: Array<string>
}

function Media(props: MediaProps) {
  const { loading, data} = props;
  return (
    <div className="ig-content">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index}>
          {item ? (
            // <a href=``></a>
            <Paper id="paper-img">
              <a href={item} target="_blank" rel="noopener noreferrer">
                <img src={item} alt="Javon's work"/>
              </a>
            </Paper>
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}
        </Box>
      ))}
    </div>
  );
}


const MyWork: React.FunctionComponent<IMyWorkProps> = (props) => {
  const [picURLs, chPicURLs] = React.useState<Array<string>>([]);
  const [loadingState, chLoadingState] = React.useState<boolean>(true);

  React.useEffect(()=>{
    initializeApp(galvanite);
    // var starCountRef = firebase.database().ref(`/users/${galvanite.javonID}/instagram/posts`);
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storage = getStorage();
    const listRef = ref(storage, 'my-work');
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          getDownloadURL(itemRef)
            .then(url => {
              chPicURLs(oldArr => [...oldArr, url])
            })
          });
        })
        .then(()=>{
        chLoadingState(false);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, []);

  return (
    <Box overflow="hidden" id="myWork">
      <Highlight />
      <div id="paper">
      {/* <span className="style-bar" /> */}
      <Media loading={loadingState} data={picURLs} />
      </div>
    </Box>
  )
};

export default MyWork;
