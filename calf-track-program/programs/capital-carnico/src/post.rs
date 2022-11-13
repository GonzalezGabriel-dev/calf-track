use anchor_lang::prelude::*;

#[account]
pub struct Post {
    pub author: Pubkey,

    pub origen: String,
    pub productor: String,
    pub siniiga: i8,
    pub reemo: String,
    //pub sicomora: i8,
    //pub peso: i8,
    pub edad: i8,
    pub destino: String,
    pub upp: String,
    pub psg: String,

    pub year: u8,
    pub month: u8,
    pub day: u8,
    pub hour: u8,
    pub minutes: u8,
    pub seconds: u8,
}

impl Post {
    pub const SPACE: usize = DISCRIMINATOR_LENGTH
        + PUBLIC_KEY_LENGTH // Author.

        + ORIGEN_LENGTH
        + PRODUCTOR_LENGTH
        + SINIIGA_LENGTH
        + REEMO_LENGTH
        //+ SICOMORA_LENGTH
        //+ PESO_LENGTH
        + EDAD_LENGTH
        + DESTINO_LENGTH
        + UPP_LENGTH
        + PSG_LENGTH
                
        + YEAR_LENGTH // TIME.
        + MONTH_LENGTH // TIME.
        + DAY_LENGTH // TIME.
        + HOUR_LENGTH // TIME.
        + MINUTES_LENGTH // TIME.
        + SECONDS_LENGTH; // TIME.
}

const DISCRIMINATOR_LENGTH: usize = 8;
const PUBLIC_KEY_LENGTH: usize = 32;

const ORIGEN_LENGTH: usize = 15;
const PRODUCTOR_LENGTH: usize = 25;
const SINIIGA_LENGTH: usize = 10;
const REEMO_LENGTH: usize = 90;
//const SICOMORA_LENGTH: usize = 1;
//const PESO_LENGTH: usize = 5;
const EDAD_LENGTH: usize = 2;
const DESTINO_LENGTH: usize = 15;
const UPP_LENGTH: usize = 12;
const PSG_LENGTH: usize = 12;

const YEAR_LENGTH: usize = 1;
const MONTH_LENGTH: usize = 1;
const DAY_LENGTH: usize = 1;
const HOUR_LENGTH: usize = 1;
const MINUTES_LENGTH: usize = 1;
const SECONDS_LENGTH: usize = 1;
