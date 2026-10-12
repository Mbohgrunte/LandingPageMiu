// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import CellphoneText from "~icons/mdi/cellphone-text";
import ChevronRight from "~icons/mdi/chevron-right";
import ChevronDown from "~icons/mdi/chevron-down";
import Clock from "~icons/mdi/clock";
import Email from "~icons/mdi/email";
import Factory from "~icons/mdi/factory";
import FileUpload from "~icons/mdi/file-upload";
import Globe from "~icons/mdi/globe";
import Heart from "~icons/mdi/heart";
import Location from "~icons/mdi/location";
import MapMarker from "~icons/mdi/map-marker";
import Menu from "~icons/mdi/menu";
import Money from "~icons/mdi/money";
import PeopleGroup from "~icons/mdi/people-group";
import Phone from "~icons/mdi/phone";
import Search from "~icons/mdi/search";
import StarOutline from "~icons/mdi/star-outline";
import Whatsapp from "~icons/logos/whatsapp-icon";

export const icons = {
	cellphoneText: { component: CellphoneText },
	clock: { component: Clock },
	chevronRight: { component: ChevronRight },
	chevronDown: { component: ChevronDown },
	email: { component: Email },
	factory: { component: Factory },
	fileUpload: { component: FileUpload },
	globe: { component: Globe },
	heart: { component: Heart },
	location: { component: Location },
	mapMarker: { component: MapMarker },
	menu: { component: Menu },
	money: { component: Money },
	peopleGroup: { component: PeopleGroup },
	phone: { component: Phone },
	search: { component: Search },
	starOutline: { component: StarOutline },
	whatsapp: { component: Whatsapp },
} as const;
