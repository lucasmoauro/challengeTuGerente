import { useState } from "react";
import { PopUp } from "./components/popUp/PopUp";

import "animate.css";
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {
	const [isPopUpOpen, setIsPopUpOpen] = useState(false);

	return (
		<div>
			{isPopUpOpen && (
				<PopUp isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} />
			)}
			<Dropdown setIsPopUpOpen={setIsPopUpOpen} />
		</div>
	);
}

export default App;
