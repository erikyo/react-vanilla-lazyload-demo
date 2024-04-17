"use client";

import "animate.css/animate.min.css";
import { VanillaLazyLoad } from "react-vanilla-lazyload";
import WallPaper from "../components/WallPaper.tsx";
import Image from "next/image";

export default function ImagesLL() {
	return (
		<>
			<WallPaper />
			{[...Array(50).keys()].map((index) => (
				<Image
					className={"demo-item"}
					key={index}
					alt={""}
					loading={"lazy"}
					src={`https://verlok.github.io/vanilla-lazyload/demos/images/440x560-${String(
						index + 1,
					).padStart(2, "0")}.webp`}
				/>
			))}
			<VanillaLazyLoad />
		</>
	);
}
