const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  isEmpty() {
    return this.ricePresent;
  },
  isRiceCooked() {
    return this.riceCooked;
  },
  isSteaming() {
    return this.heatingInProgress;
  },
  addRice() {
    if (!this.isEmpty()) return "There's already rice in the rice cooker.";
    console.log("Rice has been added!");
    return;
  },

  cookRice() {
    if (this.isEmpty()) return "Cannot cook. The rice cooker is empty.";
    this.delaySync(1500);
    this.riceCooked(true);
    console.log("The rice has been cooked");
    return;
  },

  steam() {
    if (this.isEmpty()) return "Cannot steam. The rice cooker is empty.";
    if (this.isSteaming()) return "Steaming is already in progress.";
    console.log("Steaming in progress...");
    this.steamingInProgress = true;
    this.delaySync(1500);
    this.steamingInProgress = false;
    console.log("Steaming completed!");
    return;
  },

  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log("The rice is now being kept warm.");
      this.heatingInProgress = true;
    } else if (!this.ricePresent) {
      console.log("Cannot keep warm. The rice cooker is empty.");
    } else if (!this.riceCooked) {
      console.log("Cannot keep warm. The rice is not cooked.");
    } else {
      console.log("Keeping warm is already in progress.");
    }
  },

  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log("The rice has been removed from the rice cooker.");
    } else {
      console.log("There's no rice to remove or it is not cooked yet.");
    }
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
  },
};

function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();

    const choice = parseInt(input);

    if (!isNaN(choice)) {
      if (choice === 1) {
        riceCooker.addRice();
      } else if (choice === 2) {
        riceCooker.cookRice();
      } else if (choice === 3) {
        riceCooker.steam();
      } else if (choice === 4) {
        riceCooker.keepWarm();
      } else if (choice === 5) {
        riceCooker.removeRice();
      } else if (choice === 6) {
        console.log("Thank you for using the Rice Cooker Simulator. Goodbye!");
        break;
      } else {
        console.log("Invalid choice. Please select a valid option.");
      }
    } else {
      console.log("Invalid input. Please enter a valid number.");
    }
  }
}

simulateRiceCooker();
