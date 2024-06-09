/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import NavMenu from "./NavMenu";








export const NavBar = () => {
	return (
		<div className="container bg-background md:py-5 py-2 flex justify-between items-center">
			<Link to="/">
				<img src="/logo.png" width={100} height={100} alt="Solo leveling logo" />
			</Link>
			<SlideTabs />
			<Button radius="full" size="lg" color="primary" className="hidden md:flex">
				Contact
			</Button>
			<NavMenu />
		</div>
	);
};

const SlideTabs = () => {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<ul
			onMouseLeave={() => {
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}));
			}}
			className="relative mx-auto md:flex w-fit rounded-full hidden bg-background p-1"
		>
			{/* Navbar links */}
			<div className="flex">
				{navLinks.map((navLink) => (
					<Tab key={navLink.label} setPosition={setPosition}>
						<Link to={navLink.path}>{navLink.label}</Link>
					</Tab>
				))}
			</div>

			<Cursor position={position} />
		</ul>
	);
};

const Tab = ({
	children,
	setPosition,
}: {
	children: ReactNode;
	setPosition: (position: any) => void;
}) => {
	const ref = useRef<HTMLLIElement | null>(null);

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current) return;

				const { width } = ref.current.getBoundingClientRect();

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
				});
			}}
			className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
		>
			{children}
		</li>
	);
};

const Cursor = ({ position }: { position: any }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-7 rounded-full bg-foreground md:h-12"
		/>
	);
};

// {/* Navbar container */}
//         <div className='flex justify-between py-5 px-3'>

//             {/* Navbar logo */}
//             <div>
//                 <Link to='/'>
//                     <img src='/logo.png' alt='solo leveling logo' width={100} height={100} />
//                 </Link>
//             </div>

//

//             {/* call to action */}
//             <div>
//                 <Link to="/contact" className='hidden md:block'>Contact</Link>
//             </div>

//             {/* Menu */}
//             <div className='md:hidden'>
//                 <NavMenu />
//             </div>
