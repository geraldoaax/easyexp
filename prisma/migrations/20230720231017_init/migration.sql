-- CreateTable
CREATE TABLE "NFeProc" (
    "id" SERIAL NOT NULL,
    "versao" TEXT NOT NULL,
    "xmlns" TEXT NOT NULL,
    "infNFe" JSONB NOT NULL,
    "Signature" JSONB NOT NULL,
    "protNFe" JSONB NOT NULL,

    CONSTRAINT "NFeProc_pkey" PRIMARY KEY ("id")
);
