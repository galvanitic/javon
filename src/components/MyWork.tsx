import * as React from 'react';
// import { IgApiClient } from 'instagram-private-api';
// import { sample } from "lodash";
import galvanite from "../galvanite";
import firebase from "firebase/app"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
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
  data: Array<IPostNodeData>
}

function Media(props: MediaProps) {
  const { loading, data} = props;
  return (
    <Grid container wrap="wrap"className="ig-content">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index}  width={"25%"} marginRight={0} my={5}>
          {item ? (
            // <a href=``></a>
            <Paper id="paper-img">
              <a href={"https://instagram.com/p/"+item.post.shortcode} target="_blank" rel="noopener noreferrer">
                <img src={item.post.thumbnail_src} alt="Javon's work"/>
              </a>
            </Paper>
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}
        </Box>
      ))}
    </Grid>
  );
}


const MyWork: React.FunctionComponent<IMyWorkProps> = (props) => {
  const [posts, reloadPosts] = React.useState<Array<IPostNodeData>>([]);
  const [loadingState, chLoadingState] = React.useState<boolean>(true);

  React.useEffect(()=>{
    firebase.initializeApp(galvanite);
    var starCountRef = firebase.database().ref(`/users/${galvanite.javonID}/instagram/posts`);
    starCountRef.on('value', (snapshot) => {
      console.log();
      if(snapshot.val() !== null){
        const data = snapshot.val();
        reloadPosts(data);
        chLoadingState(false);
      }
    })
  }, [reloadPosts]);

  return (
    <Box overflow="hidden" id="myWork">
      <div id="paper">
      {/* <span className="style-bar" /> */}
      <Media loading={loadingState} data={posts} />
      </div>
    </Box>
  )
};

export default MyWork;
