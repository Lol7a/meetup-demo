import Card from "../ui/Card";
import { useRef } from "react";

import classes from "./NewMeetupForm.module.scss";

const NewMeetupForm = (props) => {
	const titleRef = useRef();
	const imgRef = useRef();
	const addressRef = useRef();
	const descriptionRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredTitle = titleRef.current.value;
		const enteredImg = imgRef.current.value;
		const enteredAddress = addressRef.current.value;
		const enteredDescription = descriptionRef.current.value;

		const meetupData = {
			title: enteredTitle,
			img: enteredImg,
			address: enteredAddress,
			description: enteredDescription,
		};

		props.onAddMeetup(meetupData);
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" ref={titleRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="img">Meetup Image</label>
					<input type="url" required id="img" ref={imgRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Meetup Address</label>
					<input type="text" required id="address" ref={addressRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Meetup Description</label>
					<textarea
						rows="5"
						required
						id="description"
						ref={descriptionRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
