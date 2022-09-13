interface MajorCredits {
    credit: number,
   _brand: "MajorCredits",
}

interface MinorCredits {
   credit: number
   _brand: "MinorCredits",
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
   return { credit: subject1.credit + subject2.credit, brand: "MajorCredits" }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
   return subject1.credit + subject2.credit
}
