import Marquee from "../ui/marquee";
import { ProductCard } from "../product-card";

const SuplementAffiliate = [
  {
    name: "Creatine Monohydrate 500g Soldiers Nutrition Sabor Natural",
    stars: 4.6,
    moreSeller: true,
    value: 73.37,
    img: "https://http2.mlstatic.com/D_NQ_NP_827810-MLU78341948067_082024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2mRVWix",
  },
  {
    name: "Creatina Monohidratada Pura 500g Dark Lab Unidade",
    stars: 4.8,
    moreSeller: true,
    value: 74.9,
    img: "https://http2.mlstatic.com/D_NQ_NP_726833-MLU77492684902_072024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/1uLNAoa",
  },
  {
    name: "Suplemento Monohidratada em Pó Max Titanium Pote 3000mg Pó sem Sabor",
    stars: 4.8,
    moreSeller: false,
    value: 58.2,
    img: "https://http2.mlstatic.com/D_NQ_NP_607880-MLU76445325347_052024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2vcrLNn",
  },
  {
    name: "Dux Nutrition Creatina Monohidratada Pote 300G Em Po Sem Sabor",
    stars: 4.7,
    moreSeller: false,
    value: 60.34,
    img: "https://http2.mlstatic.com/D_NQ_NP_809764-MLU78795129554_092024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/1gs8ZM6",
  },
  {
    name: "Suplemento em Pó Creatine - 300g - Probiótica",
    stars: 4.7,
    moreSeller: true,
    value: 48.1,
    img: "https://http2.mlstatic.com/D_NQ_NP_630961-MLU74423532390_022024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2pgiGdj",
  },
  {
    name: "Creatina Monohidratada Pura 1kg Dark Lab Unidade Sem sabor",
    stars: 4.8,
    moreSeller: true,
    value: 155.8,
    img: "https://http2.mlstatic.com/D_NQ_NP_893522-MLU76546474137_052024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2hGaryw",
  },
  {
    name: "Creatina Monohidratada Pote 300g 100% Pura Soldiers Nutrition",
    stars: 4.8,
    moreSeller: false,
    value: 54.19,
    img: "https://http2.mlstatic.com/D_NQ_NP_879854-MLU75393162237_032024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2cWAjew",
  },
];

const firstRow = SuplementAffiliate.slice(0, SuplementAffiliate.length / 2);
const secondRow = SuplementAffiliate.slice(SuplementAffiliate.length / 2);
// const thirdRow = affiliate.slice(reviews.length / 2);

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
      <div className="pointer-events-none absolute inset-y-0 left-full w-1/4  bg-gradient-to-l from-pink-600/10  dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-full w-1/4 bg-gradient-to-r from-pink-600/10    dark:from-background"></div>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review, id) => (
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
      </Marquee> */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
};
