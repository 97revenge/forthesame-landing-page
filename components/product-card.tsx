"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  stars: number;
  moreSeller?: boolean;
  value: number;
  img: string;
  affiliateLink: string;
}

export function ProductCard({
  name,
  stars,
  moreSeller,
  value,
  img,
  affiliateLink,
}: ProductCardProps) {
  return (
    <>
      <div>
        {" "}
        {moreSeller == true ? (
          <>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full max-w-[240px] mx-auto"
            >
              <Link href={affiliateLink} className="block">
                <Card className="overflow-hidden bg-[#2A3B2A] border-[#4CAF50]/20 hover:border-[#4CAF50]/40 transition-all rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={img}
                      alt={name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {moreSeller && (
                      <Badge className="absolute top-2 right-2 bg-[#9FE22F] text-[#2A3B2A] hover:bg-[#9FE22F]/90 text-xs">
                        Mais Vendido
                      </Badge>
                    )}
                  </div>
                  <div className="p-3 bg-gradient-to-b from-[#2A3B2A] to-[#1A2B1A] rounded-b-xl">
                    <h3 className="text-sm font-semibold text-[#9FE22F] line-clamp-2 mb-1">
                      {name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(stars)
                              ? "fill-[#9FE22F] text-[#9FE22F]"
                              : "fill-[#4CAF50]/20 text-[#4CAF50]/20"
                          }`}
                        />
                      ))}
                      <span className="text-[#9FE22F]/80 text-xs ml-1">
                        {stars}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-[#9FE22F]">
                        R$ {value.toFixed(2)}
                      </span>
                      <span className="text-[#9FE22F]/60 text-xs">à vista</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full max-w-[240px] mx-auto"
            >
              <Link href={affiliateLink} className="block">
                <Card className="overflow-hidden bg-[#2A3B2A] border-[#4CAF50]/20 hover:border-[#4CAF50]/40 transition-all rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={img}
                      alt={name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {moreSeller && (
                      <Badge className="absolute top-2 right-2 bg-[#9FE22F] text-[#2A3B2A] hover:bg-[#9FE22F]/90 text-xs">
                        Mais Vendido
                      </Badge>
                    )}
                  </div>
                  <div className="p-3 bg-gradient-to-b from-[#2A3B2A] to-[#1A2B1A] rounded-b-xl">
                    <h3 className="text-sm font-semibold text-[#9FE22F] line-clamp-2 mb-1">
                      {name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(stars)
                              ? "fill-[#9FE22F] text-[#9FE22F]"
                              : "fill-[#4CAF50]/20 text-[#4CAF50]/20"
                          }`}
                        />
                      ))}
                      <span className="text-[#9FE22F]/80 text-xs ml-1">
                        {stars}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-[#9FE22F]">
                        R$ {value.toFixed(2)}
                      </span>
                      <span className="text-[#9FE22F]/60 text-xs">à vista</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
