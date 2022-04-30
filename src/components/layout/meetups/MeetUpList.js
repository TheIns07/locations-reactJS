import MeetupItem from './MeetupItem';
import styles  from './MeetUpList.module.css'

function MeetUpList(props){
    return (
        <ul className={styles.list}>
        {props.meetups.map(meetup => 
        <MeetupItem 
            key = {meetup.id} 
            id = {meetup.id} 
            image = {meetup.image} 
            title = {meetup.title} 
            address = {meetup.address} 
            description = {meetup.description} 
            meetup = {meetup}/ 
            >
        )}
        </ul>

    );
}

export default MeetUpList;