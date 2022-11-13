use anchor_lang::prelude::*;

//importamos los módulos  
mod post;
pub use crate::post::Post;

mod ctx;
pub use crate::ctx::*;

mod err;
pub use crate::err::ErrorCode;



declare_id!("6c2RKWQMZ3SgmByGjDj6fhnbiUGdY3gJjQaqYcawTsEv");

#[program]
pub mod miprograma {
    use super::*;
    pub fn send_post(
        //estructura de las cuentas
        ctx: Context<SendPost>, // this para java (las cuentas que interactuan)

        tip: String,

        origen: String,
        productor: String,
        siniiga: i8,
        reemo: String,
        edad: i8,
        destino: String,
        upp: String,
        psg: String,

        year: u8,
        month: u8,
        day: u8,
        hour: u8,
        minutes: u8,
        seconds: u8,
    ) -> Result<()> {
        let post: &mut Account<Post> = &mut ctx.accounts.post;
        let author: &Signer = &ctx.accounts.author;
        

        if origen.chars().count() > 22 {
            return Err(ErrorCode::OrigenTooLong.into());
        }

        if productor.chars().count() > 25 {
            return Err(ErrorCode::ProductorTooLong.into());
        }

        if reemo.chars().count() > 90 {
            return Err(ErrorCode::ReemoTooLong.into());
        }


        if destino.chars().count() > 15 {
            return Err(ErrorCode::DestinoTooLong.into());
        }

        if upp.chars().count() > 12 {
            return Err(ErrorCode::UppTooLong.into());
        }

        if psg.chars().count() > 12 {
            return Err(ErrorCode::PsgTooLong.into());
        }

        post.author = *author.key;

        post.origen = origen;
        post.productor= productor;
        post.siniiga= siniiga;
        post.reemo= reemo;
        post.edad= edad;
        post.destino= destino;
        post.upp= upp;
        post.psg= psg;

        post.year = year;
        post.month = month;
        post.day = day;
        post.hour = hour;
        post.minutes = minutes;
        post.seconds = seconds;

        let tip: u64 = tip.parse::<u64>().unwrap();
        let payer_info: &Signer = &mut ctx.accounts.author;
        let to = &mut ctx.accounts.wallet_collector;
        let program_info = &ctx.accounts.system_program;

        assert!(to.key().to_string() != "");


        //Pendiente
        let transfer_instruction = anchor_lang::solana_program::system_instruction::transfer(
            &payer_info.key(),
            &to.key(),
            tip,
        );
        let required_accounts_for_create = &[
            payer_info.to_account_info().clone(),
            to.clone(),
            
            program_info.clone(),
        ][..];
        anchor_lang::solana_program::program::invoke(
            &transfer_instruction,
            required_accounts_for_create,
        )?;
        Ok(())
    }

    /*pub fn delete_post(_ctx: Context<DeletePost>) -> Result<()> {
        Ok(())
    }*/
}
