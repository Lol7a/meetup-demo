import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import Head from "next/head";

const MeetupDetailsPage = ({ meetupData }) => {
	return (
		<>
			<Head>
				<title>{meetupData.title}</title>
			</Head>
			<MeetupDetail
				img={meetupData.img}
				title={meetupData.title}
				address={meetupData.address}
				description={meetupData.description}
			/>
		</>
	);
};

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://lol7a:5652Lol7a013!@cluster0.xigzm3r.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupCollection = db.collection("meetups");

	const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		"mongodb+srv://lol7a:5652Lol7a013!@cluster0.xigzm3r.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupCollection = db.collection("meetups");

	const selectedMeetup = await meetupCollection.findOne({
		_id: new ObjectId(meetupId),
	});

	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				img: selectedMeetup.img,
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				description: selectedMeetup.description,
			},
		},
	};
}

export default MeetupDetailsPage;
