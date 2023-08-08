import { useRouter } from "next/router";
import Card from "../ui/Card";

import classes from "./MeetupItem.module.scss";

const MeetupItem = ({ id, img, title, address }) => {
	const router = useRouter();

	const showDetailsHandler = () => {
		router.push(`/${id}`);
	};

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.img}>
					<img src={img} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetailsHandler}>Show Details</button>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
