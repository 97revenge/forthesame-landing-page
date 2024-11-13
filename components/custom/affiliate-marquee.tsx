import Marquee from "../ui/marquee";
import { ProductCard } from "../product-card";

const reviews = [
  {
    name: "Jack",
    stars: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    stars: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    stars: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    stars: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    stars: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    stars: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const affiliate = [
  {
    name: "Creatine Monohydrate 500g Soldiers Nutrition Sabor Natural",
    stars: 4.6,
    moreSeller: true,
    value: 73.37,
    img: "https://http2.mlstatic.com/D_NQ_NP_827810-MLU78341948067_082024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2mRVWix",
  },
  {
    name: "Whey Protein Isolate 900g Vanilla Supreme",
    stars: 4.8,
    moreSeller: true,
    value: 145.0,
    img: "https://http2.mlstatic.com/D_NQ_NP_123456-MLU45345123456_092024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/3kABXyz",
  },
  {
    name: "BCAA 2400mg 120 Capsules MuscleTech",
    stars: 4.5,
    moreSeller: false,
    value: 85.5,
    img: "https://http2.mlstatic.com/D_NQ_NP_789012-MLU67891234567_102024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/4nQYZwx",
  },
  {
    name: "Glutamine Powder 500g Power Supplement",
    stars: 4.7,
    moreSeller: true,
    value: 99.9,
    img: "https://http2.mlstatic.com/D_NQ_NP_456789-MLU12345678901_112024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/5jLTYuz",
  },
  {
    name: "Pre-Workout 300g Watermelon Blast",
    stars: 4.3,
    moreSeller: false,
    value: 67.8,
    img: "https://http2.mlstatic.com/D_NQ_NP_234567-MLU34567890123_122024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/6qWVXyz",
  },
  {
    name: "Omega-3 Fish Oil 1000mg 60 Softgels Health First",
    stars: 4.9,
    moreSeller: true,
    value: 49.99,
    img: "https://http2.mlstatic.com/D_NQ_NP_345678-MLU45678901234_012025-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/7lRMVyz",
  },
  {
    name: "Vitamin D3 2000 IU 120 Capsules Sunshine Labs",
    stars: 4.6,
    moreSeller: false,
    value: 40.5,
    img: "https://http2.mlstatic.com/D_NQ_NP_567890-MLU67890123456_022025-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/8mNXVwx",
  },
];

const firstRow = affiliate.slice(0, reviews.length / 2);
const secondRow = affiliate.slice(reviews.length / 2);

export const AffiliateMarquee = () => {
  return (
    <div className=" ">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {firstRow.map((review, id) => (
          <ProductCard
            key={id}
            affiliateLink={review.affiliateLink}
            name={review.name}
            moreSeller={review.moreSeller}
            img={review.img}
            stars={review.stars}
            value={review.value}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, id) => (
          <ProductCard
            key={id}
            affiliateLink={review.affiliateLink}
            name={review.name}
            moreSeller={review.moreSeller}
            img={review.img}
            stars={review.stars}
            value={review.value}
          />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
};
