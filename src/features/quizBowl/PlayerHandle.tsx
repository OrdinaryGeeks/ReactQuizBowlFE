import { Container, CssBaseline, Box, Typography, Button } from "@mui/material";
import { createOrGetPlayer } from "./quizSlice";
import { Player } from "./Player";
import { useAppSelector, useAppDispatch } from "../../app/Store/configureStore";
import { useState } from "react";

export default function PlayerHandle() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  const [userName, setUserName] = useState("");

  //populate a temp player object to push to the API. Sets the player in quiz slice in dispatch
  async function CreateOrGetPlayer() {
    if (user) {
      if(userName.length > 3)
      {
      const tempPlayer: Player = {
        id: 1,
       // userName: user.userName,
       userName : userName,
        email: user.email,
        score: 0,
        gameStateId: null,
        ready: false,
        nextQuestion: false,
        gameName: "",
        incorrect: false,
        gamesJoined: "",
      };

      await dispatch(createOrGetPlayer(tempPlayer));
    }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box>
        <Typography variant="h6">
          Your player handle for this current session has not been set. Please
          press Set Player Handle to set it to your Identity User Name
        </Typography>
        <input type="text" onChange={(e)=>setUserName(()=>e.target.value)} placeholder="Enter your username"/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={CreateOrGetPlayer}
        >
          Set Player Handle
        </Button>
      </Box>
    </Container>
  );
}
