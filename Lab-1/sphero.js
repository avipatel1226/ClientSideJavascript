// Lab 3 - Sphero Bolt Obstacle
// Avi Patel

// keeping track of what happens during the run
let totalDistance = 0;
let turns = 0;
let bumps = 0;

// if the robot hits something, count it
onCollision(() => {
  bumps++;
  speak("Oops");
});

// small helper so I don’t repeat roll() everywhere
async function move(speed, direction, time) {
  await roll(speed, direction, time);
  totalDistance += speed * (time / 1000); // rough estimate
}

async function startProgram() {
  speak("Here we go");
  setMainLed({ r: 0, g: 120, b: 255 });

  // --- movement for the obstacle course ---
  await move(60, 0, 2000);   // straight
  turns++;
  await move(60, 90, 1500);  // right turn
  turns++;
  await move(60, 0, 2500);   // straight again
  // --- end of movement section ---

  await roll(0, 0, 300); // stop the robot

  // grab some sensor info at the end
  const accel = await getAccelerometer();
  const gyro = await getGyroscope();
  const heading = await getHeading();

  // quick summary in the console
  console.log("Run finished");
  console.log("Distance:", totalDistance.toFixed(1));
  console.log("Turns:", turns);
  console.log("Collisions:", bumps);
  console.log("Heading:", heading);
  console.log("Accel:", accel);
  console.log("Gyro:", gyro);

  speak("Done");
}
