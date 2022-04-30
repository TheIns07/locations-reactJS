import MeetUpList from "../components/layout/meetups/MeetUpList";
import {useState, useEffect} from 'react';



function AllMeetUpsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-3c14e-default-rtdb.firebaseio.com/meetups.json')
      .then(Response => {
        return Response.json();
      })
      .then(data => { 

        const meetups = [];

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

    if(isLoading){
      return( 
      <section>
        <p>Loading...</p>
      </section>
      );
    }

    return (
    <section>
    <h1>All meetups</h1>
        <MeetUpList meetups = {loadedMeetUps} />
    </section>
    );
}

export default AllMeetUpsPage;