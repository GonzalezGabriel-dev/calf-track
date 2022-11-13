import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { CapitalCarnico } from "../target/types/capital_carnico";

describe("capital-carnico", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CapitalCarnico as Program<CapitalCarnico>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
