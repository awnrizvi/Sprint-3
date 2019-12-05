async function startProgram() {
	await roll(0, 50, 2);
	await delay(0.5);
	await roll(90, 50, 2);
	await delay(0.5);
	await roll(0, 31, 2.25);
	await delay(0.5);
	await roll(90, 125, 2.25);
	await delay(0.5);
	await roll(224, 198, 3);
}
