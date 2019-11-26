async function startProgram() {
	setHeading(0);
	setMainLed({ r: 246, g: 186, b: 255 });
	await delay(0.2);
	setSpeed(65);
	for (var _i0 = 0; _i0 < 5; ++_i0) {
		await spin(358, 7.7);
		await spin(-358, 7.7);
		await delay(0.025);
	}
	stopRoll();
	await delay(2);
	await fade({ r: 0, g: 241, b: 255 }, { r: 1, g: 255, b: 0 }, 0);
	await fade({ r: 0, g: 255, b: 17 }, { r: 255, g: 247, b: 0 }, 0);
	await fade({ r: 255, g: 217, b: 0 }, { r: 255, g: 0, b: 15 }, 0);
	await fade({ r: 255, g: 0, b: 24 }, { r: 250, g: 0, b: 255 }, 0);
	await fade({ r: 225, g: 0, b: 255 }, { r: 5, g: 0, b: 255 }, 0);
	await speak('Hooray', true);
}
