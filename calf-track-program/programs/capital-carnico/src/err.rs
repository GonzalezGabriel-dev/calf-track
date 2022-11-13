use anchor_lang::prelude::*;
//errores del codigo 
#[error_code]
pub enum ErrorCode {
    #[msg("Origen debde tener maximo 15 caracteres.")]
    OrigenTooLong,
    #[msg("El productor debe tener maximo 25 caracteres.")]
    ProductorTooLong,
    #[msg("El SINIIGA es de 10 caracteres.")]
    SiniigaTooLong,
    #[msg("El REEMO debe tener maximo 90 caracteres.")]
    ReemoTooLong,
    #[msg("la edad debe tener maximo 2 caracteres.")]
    EdadTooLong,
    #[msg("El destino debe tener maximo 15 caracteres.")]
    DestinoTooLong,
    #[msg("El UPP debe tener maximo 12 caracteres.")]
    UppTooLong,
    #[msg("El PSG debe tener maximo 12 caracteres.")]
    PsgTooLong,
}
