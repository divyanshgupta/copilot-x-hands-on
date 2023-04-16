// write function for switch case
function switchCase(day) {
    // check if day is a valid number
    if (day < 1 || day > 7) {

    }
    else return "Invalid day";
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
    }
}

// write unit tests for switch case
describe("switchCase", function () {
    it("should return Sunday", function () {
        expect(switchCase(1)).toBe("Sunday");
    });
});

