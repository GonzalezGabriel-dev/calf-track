import React, { ChangeEvent, useState } from 'react';
import {
  AnchorProvider,
  BN,
  Idl,
  Program,
  utils,
  web3,
} from '@project-serum/anchor';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Commitment, Connection, PublicKey } from '@solana/web3.js';
import idl from '../idl.json';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import CampaignsTable from '../components/campaigns-table';
import NavBar from '../components/NavBar';

const opts: { preflightCommitment: Commitment } = {
  preflightCommitment: 'processed',
};

const programId = new PublicKey(idl.metadata.address);

interface CampaignsViewProps {
  network: string;
}

export const RegisterScreen: React.FC<CampaignsViewProps> = ({ network }) => {
  const walletCollector = 'Fzd7o3334mVZ93suDdrLrCyGHU2puQwFVj5T3fZuvman';
  const wallet = useWallet();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [targetAmount, setTargetAmount] = useState<number>(1);
  const [psgUpp, setPsgUpp] = useState('');
  const [productor, setProductor] = useState('');
  const [destino, setDestino] = useState('');
  const [remo, setRemo] = useState('');
  const changepsgUpp = (e: ChangeEvent<any>) => {
    setPsgUpp(e.target.value);
  };
  const changeProductor = (e: ChangeEvent<any>) => {
    setProductor(e.target.value);
  };
  const changeDestino = (e: ChangeEvent<any>) => {
    setDestino(e.target.value);
  };
  const changeRemo = (e: ChangeEvent<any>) => {
    setRemo(e.target.value);
  };
  const [edad, setEdad] = useState(0);
  const changeEdad = (e: ChangeEvent<any>) => {
    setEdad(e.target.value);
  };
  const getProgram = () => {
    /* create the provider and return it to the caller */
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(connection, wallet as any, opts);
    /* create the program interface combining the idl, program ID, and provider */
    const program = new Program(idl as Idl, programId, provider);
    return program;
  };

  const program = getProgram();

  const onNameChange = (e: ChangeEvent<any>) => {
    setName(e.target.value);
  };
  const onDescriptionChange = (e: ChangeEvent<any>) => {
    setDescription(e.target.value);
  };
  const onTargetAmountChange = (e: ChangeEvent<any>) => {
    setTargetAmount(e.target.value);
  };

  const createCampaign = async () => {
    let date = new Date();
    let year = date.getUTCFullYear() - 2000;
    let month = date.getUTCMonth();
    let day = date.getUTCDate();
    let hour = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    const [campaign] = await PublicKey.findProgramAddress(
      [utils.bytes.utf8.encode('campaign_demo'), wallet.publicKey!.toBuffer()],
      program.programId
    );
    console.log('ESTE ES', campaign);
    await program.methods
      .sendPost(
        'campaign',
        '',
        productor,
        '',
        'reemo',
        edad,
        destino,
        psgUpp,
        psgUpp,
        year,
        month,
        day,
        hour,
        minutes,
        seconds
      )
      .accounts({
        campaign: campaign,
        user: wallet.publicKey!,
        systemProgram: web3.SystemProgram.programId,
        walletCollector: walletCollector,
      })
      .rpc();
  };

  return (
    <>
      <NavBar type={'top-nav-collapse2'} />
      <section id="contact" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10 col-sm-12">
              <div className="section-title">
                <h1>Registro </h1>
              </div>
              <form id="contact-form">
                <div className="col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PSG/UPP"
                    name="psgupp"
                    onChange={changepsgUpp}
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Productor"
                    name="productor"
                    onChange={changeProductor}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Edad"
                    name="edad"
                    onChange={changeEdad}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Destino"
                    name="destino"
                    onChange={changeDestino}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label htmlFor="siniiga">REEMO</label>
                  <input
                    id="inputremo"
                    type="file"
                    className="form-control"
                    placeholder=""
                    name="reemo"
                    onChange={changeRemo}
                  />
                </div>
                <div id="visorArchivo" className="col-md-12 col-sm-12"></div>
                <div className="col-md-12 col-sm-12"></div>
              </form>
              <button
                className="btn btn-primary col-md-12 col-sm-12"
                onClick={() => {
                  console.log('funciona');
                  createCampaign();
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RegisterScreen;
