import Marquee from "../ui/marquee";
import { ProductCard } from "../product-card";
import BlurFade from "../ui/blur-fade";

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

const underwearAffiliate = [
  {
    name: "Kit Com 10 Cuecas Boxer Masculino Mash",
    stars: 4.8,
    moreSeller: false,
    value: 123.5,
    img: "https://http2.mlstatic.com/D_NQ_NP_624304-MLB70387289724_072023-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/1Tcmhsf",
  },
  {
    name: "Kit 5 Camisetas Regatas Masculina Lisa Básica Academia Dry",
    stars: 4.5,
    moreSeller: true,
    value: 50.7,
    img: "https://http2.mlstatic.com/D_NQ_NP_911321-MLB77085813689_062024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2RaKQtq",
  },
  {
    name: "Short Modelador Lupo Original Diminui Barriga Levanta Bumbum",
    stars: 4.3,
    moreSeller: true,
    value: 44.39,
    img: "https://http2.mlstatic.com/D_NQ_NP_753347-MLB72205288913_102023-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/1gBUajv",
  },
  {
    name: "Kit Com 10 Cuecas Boxer Algodão Sem Costura Zorba",
    stars: 4.7,
    moreSeller: false,
    value: 167.88,
    img: "https://http2.mlstatic.com/D_NQ_NP_651446-MLB74462621061_022024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2ooge2p",
  },
  {
    name: "Kit Com 2 Bermudas Básicas Masculinas Em Moletom Hering",
    stars: 4.6,
    moreSeller: false,
    value: 112.89,
    img: "https://http2.mlstatic.com/D_NQ_NP_605913-MLB78740361469_082024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2bRtAqp",
  },
  {
    name: "Short Modelador Lupo Up-line Levanta Bumbum Loba",
    stars: 4.6,
    moreSeller: false,
    value: 34.57,
    img: "https://http2.mlstatic.com/D_NQ_NP_698043-MLB74528194817_022024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2VLPbr2",
  },
  {
    name: "Kit 4 Bermuda Moletinho Masculina Algodão Casual Treino",
    stars: 4.6,
    moreSeller: false,
    value: 34.57,
    img: "https://http2.mlstatic.com/D_NQ_NP_890078-MLB80119655983_102024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2ZiJiha",
  },
  {
    name: "Kit 2 Camisa Dry Fit Térmica Academia Camiseta Proteção Uv",
    stars: 4.6,
    moreSeller: true,
    value: 69.42,
    img: "https://http2.mlstatic.com/D_NQ_NP_618366-MLB70558836667_072023-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/2y7NAmG",
  },
  {
    name: "Short Saia Fitness Roupa Feminina Academia Suplex Atacado",
    stars: 4.0,
    moreSeller: false,
    value: 69.42,
    img: "https://http2.mlstatic.com/D_NQ_NP_743722-MLB80027467460_102024-O.webp",
    affiliateLink: "https://mercadolivre.com/sec/15FjXo8",
  },
];

const firstRow = SuplementAffiliate.slice(0, SuplementAffiliate.length / 2);
const secondRow = SuplementAffiliate.slice(SuplementAffiliate.length / 2);

const underwearFirstRow = underwearAffiliate.slice(
  0,
  underwearAffiliate.length / 2
);

const underwearSecondRow = underwearAffiliate.slice(
  underwearAffiliate.length / 2
);

export const AffiliateMarquee = () => {
  return (
    <>
      <div className="my-4 ">
        <BlurFade delay={0.2}>
          <p className="font-bold drop-shadow-2xl text-lg  bg-opacity-50 animate-gradient bg-gradient-to-r from-green-600 via-lime-200 to-green-300 bg-clip-text text-transparent">
            <u>Suplementos</u>
          </p>
        </BlurFade>
        <Marquee pauseOnHover className="[--duration:20s] ">
          {firstRow.map((review, id) => (
            <BlurFade key={id} delay={0.25 + id * 0.05} inView>
              <ProductCard
                key={id}
                affiliateLink={review.affiliateLink}
                name={review.name}
                moreSeller={review.moreSeller}
                img={review.img}
                stars={review.stars}
                value={review.value}
              />
            </BlurFade>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, id) => (
            <BlurFade key={id} delay={0.25 + id * 0.05} inView>
              <ProductCard
                key={id}
                affiliateLink={review.affiliateLink}
                name={review.name}
                moreSeller={review.moreSeller}
                img={review.img}
                stars={review.stars}
                value={review.value}
              />
            </BlurFade>
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

      <div className="my-4 ">
        <BlurFade delay={0.2}>
          <p className="font-bold drop-shadow-2xl text-lg  bg-opacity-50 animate-gradient bg-gradient-to-r from-green-600 via-lime-200 to-green-300 bg-clip-text text-transparent">
            <u>Roupas Fitness </u>
          </p>
        </BlurFade>
        <Marquee pauseOnHover className="[--duration:20s] ">
          {underwearFirstRow.map((review, id) => (
            <BlurFade key={id} delay={0.25 + id * 0.05} inView>
              <ProductCard
                key={id}
                affiliateLink={review.affiliateLink}
                name={review.name}
                moreSeller={review.moreSeller}
                img={review.img}
                stars={review.stars}
                value={review.value}
              />
            </BlurFade>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {underwearSecondRow.map((review, id) => (
            <BlurFade key={id} delay={0.25 + id * 0.05} inView>
              <ProductCard
                key={id}
                affiliateLink={review.affiliateLink}
                name={review.name}
                moreSeller={review.moreSeller}
                img={review.img}
                stars={review.stars}
                value={review.value}
              />
            </BlurFade>
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
    </>
  );
};
