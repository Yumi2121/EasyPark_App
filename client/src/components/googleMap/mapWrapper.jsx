import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  
  <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
    <YourComponent/>
  </Wrapper>
