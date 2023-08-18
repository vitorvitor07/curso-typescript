type VotationOption = {
  votesNumber: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public datails: string) {}

  get votationOption(): VotationOption[] {
    return this._votationOptions;
  }

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationindex: number): void {
    if (!this._votationOptions[votationindex]) return;
    this._votationOptions[votationindex].votesNumber++;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.datails);
      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.votesNumber);
      }
      console.log("##############" + "\n");
    }
  }
}

const votation1 = new Votation("What is your favorite language?");
votation1.addVotationOption({
  votesNumber: 0,
  option: "typescript",
});
votation1.addVotationOption({
  votesNumber: 0,
  option: "javascript",
});
votation1.addVotationOption({
  votesNumber: 0,
  option: "python",
});
votation1.vote(2);
votation1.vote(2);
votation1.vote(2);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);

const votation2 = new Votation("What is your favorite color?");
votation2.addVotationOption({
  votesNumber: 0,
  option: "red",
});
votation2.addVotationOption({
  votesNumber: 0,
  option: "green",
});
votation2.addVotationOption({
  votesNumber: 0,
  option: "black",
});
votation2.vote(2);
votation2.vote(2);
votation2.vote(2);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
