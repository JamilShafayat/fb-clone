import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	FlagIcon,
	HomeIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
	UserGroupIcon,
	ViewGridAddIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";

function Header() {
	return (
		<div className="sticky top-0 z-50 flex items-center p-2 bg-white shadow-md lg:px-5">
			{/* left */}
			<div className="flex items-center">
				<Image
					src="https://links.papareact.com/5me"
					width={40}
					height={40}
					layout="fixed"
				/>
				<div className="flex items-center p-2 ml-2 bg-gray-100 rounded-full">
					<SearchIcon className="h-6 text-gray-600" />
					<input
						className="items-center flex-shrink hidden placeholder-gray-500 bg-transparent outline-none md:inline-flex"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			{/* center */}
			<div className="flex justify-center flex-grow">
				<div className="flex space-x-6 md:space-x-2">
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>

			{/* right */}
			<div className="flex items-center justify-end sm:space-x-2">
				{/* profile pic */}
				<p className="pr-3 font-semibold whitespace-nowrap">Jamil Shafayat</p>
				<ViewGridAddIcon className="icon" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	);
}

export default Header;
