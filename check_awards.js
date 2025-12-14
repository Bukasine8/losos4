const fs = require('fs');

async function extract() {
    try {
        const { PDFParse } = require('pdf-parse');
        const dataBuffer = fs.readFileSync('LOSOS-4  CONSULTANTS LTD. PROFILE 2025.pdf');
        const parser = new PDFParse({ data: dataBuffer });
        const result = await parser.getText();

        console.log('Searching for "Award"...');
        const lower = result.text.toLowerCase();
        const awardIndices = [];
        let index = lower.indexOf('award');
        while (index !== -1) {
            awardIndices.push(index);
            index = lower.indexOf('award', index + 1);
        }

        if (awardIndices.length > 0) {
            console.log('Found "award" at indices:', awardIndices.length);
            awardIndices.forEach(i => {
                const start = Math.max(0, i - 50);
                const end = Math.min(result.text.length, i + 50);
                console.log(`...${result.text.substring(start, end).replace(/\n/g, ' ')}...`);
            });
        } else {
            console.log('No "Award" found in text.');
        }

    } catch (e) {
        console.error(e);
    }
}
extract();
