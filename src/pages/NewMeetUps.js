import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";


function NewMeetUpsPage(){
    const navigate = useNavigate();
    function addMeetUpHandler(meetupData){
        fetch(
            'https://react-getting-started-3c14e-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return (
    <section>
        <h1>New Meetups Page</h1>
        <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
    </section>
    );
}

export default NewMeetUpsPage;