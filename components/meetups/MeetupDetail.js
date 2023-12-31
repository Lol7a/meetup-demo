import classes from "./MeetupDetail.module.scss";

const MeetupDetail = ({ img, title, address, description }) => {
	return (
		<section className={classes.detail}>
			<img src={img} alt={title} />
			<h1>{title}</h1>
			<address>{address}</address>
			<p>{description}</p>
		</section>
	);
};

export default MeetupDetail;
