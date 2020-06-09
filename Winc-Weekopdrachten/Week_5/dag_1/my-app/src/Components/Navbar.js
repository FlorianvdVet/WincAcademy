import React from "react";

function Navbar() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "lightblue";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "lightgreen";
  } else {
    timeOfDay = "night";
    styles.color = "darkblue";
  }

  return (
    <header className="navbar">
      <h1>Dit is de navbar titel</h1>
      <p>Inhoud van de navbar...</p>
      <p style={styles}>good {timeOfDay}!</p>
    </header>
  );
}

export default Navbar;
