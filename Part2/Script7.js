var area;
do {
    var shapeType = Number(prompt("Enter number of shape you want to calculate area for \n1.Square\n2.Rectangle\n3.Circle\n4.Triangle\n5.Exit"));
    switch (shapeType) {
        case 1: {
            let side = Number(prompt("Enter dimension of one side"));
            area = side * side; break;
        }
        case 2: {
            let side1 = prompt("Enter length of the rectangle");
            let side2 = prompt("Enter width of the rectangle");
            area = side1 * side2; break;
        }
        case 3: {
            let radius = prompt("Enter radius of the circle");
            area = Math.PI * radius * radius; break;
        }
        case 4: {
            let base = prompt("Enter length of the base of the triangle");
            let height = prompt("Enter length of the height of the triangle");
            area = 0.5 * base * height; break;

        }
        case 5: break;
        default: alert("Enter valid number"); break;
    }
    if (shapeType!=5) alert("Area of shape: " + area);
} while (shapeType!=5)