import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you</p>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl">
        {reviews.slice(0, 1).map((review) => (
          <Link href={`/reviews/${review.slug}`}>
            <img
              src={review.image}
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="font-semibold font-orbitron py-1 text-center">
              {review.title}
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
}
