import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import CheckBox from "./CheckBox";
import { tabData } from "./Data";
import ButtonDel, { ButtonDelAll } from "./Button";


function TabContent({ activeTab }) {

	const [inputValue, setInputValue] = useState('');
	const [items, setItems] = useState(() => {
		return JSON.parse(window.localStorage.getItem('TASKS_DATA')) || [];
	});

	useEffect(() => {
		window.localStorage.setItem('TASKS_DATA', JSON.stringify(items));
	}, [items]);

	const handleInputChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleCheckboxChange = (id) => {
		const updatedItems = items.map((item) =>
			item.id === id ? { ...item, done: !item.done } : item
		)
		setItems(updatedItems);
	}
	const [idCount, setIdCount] = useState(() =>
		(items !== null && items.length > 0 ? items[items.length - 1].id + 1 : 1)
	)

	const handleAddItem = () => {
		if (inputValue.trim() !== '') {
			const newItem = {
				id: idCount,
				content: inputValue,
				done: false
			}
			setItems([...items, newItem]);
			setInputValue('');
			setIdCount(idCount + 1);
		}
	};



	if (activeTab === tabData[0].label) {
		return (
			<div>
				<div className="input-container">
					<input
						className="input-add-details"
						placeholder="add details"
						value={inputValue}
						onChange={handleInputChange}
					/>
					<button onClick={handleAddItem} >Add</button>

				</div>
				<div className="checkboxs-container">

					{items.map((item) => (
						<CheckBox
							key={item.id}
							item={item}
							content={item.content}
							onChange={() =>
								handleCheckboxChange(item.id)
							}
						/>
					))}
				</div>
			</div>
		)
	}
	else if (activeTab === tabData[1].label) {
		return (
			<div>
				<div className="input-container">
					<input
						className="input-add-details"
						placeholder="add details"
						value={inputValue}
						onChange={handleInputChange}
					/>
					<button onClick={handleAddItem} >Add</button>

				</div>
				<div className="checkboxs-container">
					{items.filter(item => item.done === false)
						.map((item) => (
							<CheckBox
								key={item.id}
								item={item}
								content={item.content}
								onChange={() =>
									handleCheckboxChange(item.id)
								}
							/>
						))}
				</div>
			</div>
		)
	}
	else {
		return (
			<div className="checkboxs-container">

				{items.filter(item => item.done)
					.map((item) => (
						<CheckBox
							key={item.id}
							item={item}
							content={item.content}
							onChange={() =>
								handleCheckboxChange(item.id)
							}
						>
							<ButtonDel onClick={() => {
								setItems(items.filter(i => i.id !== item.id));
								window.localStorage.setItem("TASKS_DATA", JSON.stringify(items));
							}
							}></ButtonDel>
						</CheckBox>
					))
				}
				<ButtonDelAll onClick={()=>{
					setItems(items.filter(i => !i.done));
					window.localStorage.setItem("TASKS_DATA", JSON.stringify(items));
				}}
				/>  
			</div >
		)

	}
}




function Tabs({
	tabs,
	tasks }) {

	const [activeTab, setActiveTab] = useState(tabs[0].label);


	const handleTabClick = (index) => {
		setActiveTab(index);
	};


	return (
		<div className="tabs-container">
			<div className="tabs">
				{tabs.map((tab) => (
					<Tab
						key={tab.id}
						label={tab.label}
						onClick={() =>
							handleTabClick(tab.label)
						}
						isActive={tab.label === activeTab}

					/>
				))}
			</div>
			<hr />
			<div className="tabs-content">
				<div className="tabcontent1">
					<TabContent tasks={tasks} activeTab={activeTab} />
				</div>

			</div>

		</div>
	);
};

export default Tabs;
