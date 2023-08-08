import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";

const HomePage = (props) => {
	return (
		<>
			
			<MeetupList meetups={props.meetups} />
		</>
	);
};

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from an API

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// fetch data from an API
	const client = await MongoClient.connect(
		"mongodb+srv://lol7a:5652Lol7a013!@cluster0.xigzm3r.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupCollection = db.collection("meetups");

	const meetups = await meetupCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				img: meetup.img,
				id: meetup._id.toString(),
				description: meetup.description,
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
