import MeetupItem from "./MeetupItem";

import classes from "./MeetupList.module.scss";

const MeetupList = ({ meetups }) => {
	return (
		<ul className={classes.list}>
			{meetups.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					img={meetup.img}
					title={meetup.title}
					address={meetup.address}
				/>
			))}
		</ul>
	);
};

export default MeetupList;
