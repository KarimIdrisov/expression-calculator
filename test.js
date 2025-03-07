const { expect } = require('chai');
const { expressionCalculator } = require('./src/index.js');



describe("Hard", function () {
    it("Nested brackets test 1", function () {
        const expr = " (  38 + 52 + 65 - 19  ) * (  72 * 3 / 36 * (  9 / 2 - 17 * 38 / 28  )  ) / 18 / 84 ";
        const result = -10.0227;
        expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    });

    //     it("Nested brackets test 2", function() {
    //         const expr = " 93 * 30 / 81 * (  78 * 83 / (  71 * 13 - (  14 + 13 - 28 * 62  ) * 62  ) + 99 - (  80 - 89 + 17 * 42  )  ) ";
    //         const result = -20871.2470;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 3", function() {
    //         const expr = " 58 * 85 * (  1 + 16 * 7 + (  82 * 31 * (  85 / 75 - 51 - 22  ) + 2 - 24  )  ) * 22 * (  27 + 67 + 0 + 93  ) ";
    //         const result = -3703376512014.6670;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 4", function() {
    //         const expr = " 99 - 78 * (  (  (  63 + 52 / 67 + 26 / 29  ) + 94 + (  68 - 11 / 1 * 88  ) + 49  ) / 69 * 15 * 8  ) - 1 ";
    //         const result = 94013.7072;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 5", function() {
    //         const expr = " (  56 / 33 + 87 + (  (  12 / 48 - 44 - 51  ) + 85 * (  69 - 35 - 67 - 82 + 81  ) - 40  )  ) - 86 - 85 ";
    //         const result = -3107.0530;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 6", function() {
    //         const expr = " (  80 / 12 / 47 - 93  ) + 78 / (  20 / 23 + (  54 + 36 / 29 + 23  ) - 61  ) ";
    //         const result = -88.5514;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 7", function() {
    //         const expr = " (  (  91 / 57 / 30 - 72  ) - (  53 * 22 / 23 / 6  ) * 79 - 27  ) - 19 / 30 ";
    //         const result = -767.0729;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 8", function() {
    //         const expr = " (  36 + 78 + (  43 / 89 - 57 / (  64 + 98 / 57 - 24 - 47  )  ) * 56  ) - (  (  29 - 9 / 76 * 99 - 29  ) * 98 / 11  ) * 31 ";
    //         const result = 3983.3897;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 9", function() {
    //         const expr = " 6 + 78 + (  55 / 20 - 92 / 55 / (  (  94 + 40 + 56 / 61  ) / 38 / 97 + (  32 / 36 / 25 * (  12 / 30 - 22 * (  51 / 87 * 71 / 50 / (  98 - 37 - 90 - 91  )  )  ) * 57  )  )  ) / 42 / 25 ";
    //         const result = 84.0012;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 10", function() {
    //         const expr = " (  (  60 - 42 - 16 / 100  ) * (  29 * 88 + 51 + 77  ) - 49 - 59  ) - 89 * 45 ";
    //         const result = 43698.2000;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 11", function() {
    //         const expr = " 11 - 92 + 48 / (  (  12 / 92 + (  53 / 74 / 22 + (  61 / 24 / 42 - (  13 * 85 + 100 / 77 / 11  ) + 89  ) + 9  ) + 87  ) / 91 * 92  ) ";
    //         const result = -81.0516;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 12", function() {
    //         const expr = " 66 - 83 + (  (  41 * 98 * 10 * (  40 / 64 + 46 * 33  )  ) / (  61 + 91 - 73 * 9 + 12  ) / (  88 * 29 / 96 - 41 - 72  )  ) * (  81 * 40 / 95 + 61  ) + 5 ";
    //         const result = 136201.6403;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 13", function() {
    //         const expr = " (  93 * 79 / (  24 + 83 / (  11 * 45 / 21 * (  (  75 - 15 - (  60 + 94 / (  70 - 27 - 89 + 71  ) - 81  ) * 27 - 73  ) * 92 - 59 - 57  ) + 13  ) * 84 * 49  ) / 22  ) * 27 / 62 + 76 ";
    //         const result = 81.9728;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 14", function() {
    //         const expr = " (  (  18 - 15 + 90 + 68 / 71  ) - 94 + (  51 / 67 + 12 / 39 + 15  ) - 28  ) + 14 / 97 ";
    //         const result = -11.8290;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 15", function() {
    //         const expr = " 29 + 67 - 22 * (  (  (  98 + 90 * 90 + 81 - 83  ) * 92 - 79 + 37  ) * 20 - 60  ) ";
    //         const result = -331754184.0000;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 16", function() {
    //         const expr = " 92 - 34 + 32 * (  (  (  89 - 87 / 11 / 66  ) / 49 + 2 / 76  ) / 93 / 45  ) * 92 ";
    //         const result = 59.2945;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 17", function() {
    //         const expr = " (  81 + 60 / 54 / 21  ) + (  77 - 31 + (  41 + 69 - 62 - 96  ) * 0  ) - 0 - 62 ";
    //         const result = 65.0529;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 18", function() {
    //         const expr = " 20 * 60 + 9 - (  89 * 95 * 3 * (  44 - 51 - 11 - (  62 + 69 - 22 + 21  ) * 9  ) / 50  ) - (  94 - 70 / 29 / 7  ) ";
    //         const result = 603787.7448;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 19", function() {
    //         const expr = " 94 / 49 + 36 / (  39 + 1 - (  18 * 47 / 20 * (  66 - 51 / 19 / 19 + (  22 * 80 / 4 / 74 - 59  )  ) * 12  ) / 69  ) ";
    //         const result = 1.2541;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 20", function() {
    //         const expr = " 24 - 23 * 17 / (  93 + 52 * 70 * (  6 + 91 / (  (  4 / 39 / 8 * 30  ) / (  22 * 97 * (  32 * 20 * (  82 - 80 * 51 / 89 * 9  ) * 56 + 82  ) * 89  ) - 17 - 17  ) / 29 / 81  )  ) ";
    //         const result = 23.9822;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 21", function() {
    //         const expr = " 3 * 26 / (  (  75 / 18 * 91 * 38  ) / 53 - (  52 / 34 - (  10 * 67 - 50 - 78  ) * 51 + 58  )  ) + 73 ";
    //         const result = 73.0028;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 22", function() {
    //         const expr = " (  91 / 56 + 53 * 93  ) + (  12 * 36 + 55 + 54 / (  56 + 43 + 45 + 61 - 45  )  ) / (  94 - 23 - 66 * (  71 + 65 / 95 / 27 / 1  ) - 17  ) ";
    //         const result = 4930.5198;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 23", function() {
    //         const expr = " 75 * 97 * 3 - (  (  59 - 3 / 88 + (  93 * 100 * 65 - 38 + 54  )  ) / 63 - 85  ) ";
    //         const result = 12313.5720;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 24", function() {
    //         const expr = " (  94 / 78 / 20 / 62  ) + 78 - (  (  40 + 46 / 7 * 35  ) / 42 + 41 * 26  ) ";
    //         const result = -994.4276;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 25", function() {
    //         const expr = " (  6 + 28 + 18 - (  (  61 + 17 * 64 * 98  ) * (  61 / 53 * 47 / 36 * 98  ) + 82 + (  69 - 55 / (  62 * 77 / 88 - 52 / 10  ) - 42 - (  48 / 84 * 77 + 40 - 13  )  )  )  ) - 4 / 99 ";
    //         const result = -15710078.0585;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 26", function() {
    //         const expr = " 96 * 67 - 10 + (  40 - 42 - 25 / (  96 / 23 * 54 * (  18 * 30 / 85 / 79 - 90  )  )  ) ";
    //         const result = 6420.0012;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 27", function() {
    //         const expr = " 93 - 42 / (  80 * 45 + 46 + (  66 * 45 - 26 * 0 * 84  )  ) - (  (  20 - 59 - 18 - 62  ) / (  9 / 90 * 16 - 6  ) * 3  ) ";
    //         const result = 11.8573;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 28", function() {
    //         const expr = " 31 * 21 + 14 / (  (  18 * 52 / (  43 - 74 / 89 - 12  ) + 8  ) + 3 / 0 + (  9 + 81 + 19 * 94 / (  0 * 71 + 53 - 20 * 94  )  )  ) ";
    //         expect(() => expressionCalculator(expr)).to.throw("TypeError: Division by zero.");
    //     });

    //     it("Nested brackets test 29", function() {
    //         const expr = " (  96 / 83 - 53 - (  59 - 91 / 91 - 54  )  ) / (  75 + 4 / (  50 - 80 * 45 + 93 + 18  ) - 76 / 54  ) * 14 + 59 ";
    //         const result = 48.3764;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });

    //     it("Nested brackets test 30", function() {
    //         const expr = " 59 - 13 + (  25 * 22 / (  47 / 38 * (  64 / 93 - 91 + 72  ) * 66  ) + 43 - 5  ) * 39 / 55 ";
    //         const result = 72.6846;
    //         expect(Number(expressionCalculator(expr).toFixed(4))).to.equal(result);
    //     });
})