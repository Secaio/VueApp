<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{ year.company }}</h2>
        <div>
            {{ year.job }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      years: [
        {
          company: 'Freelancer Programmer',
          job: `Since 2007, the Brazilian government made sales digitization mandatory that required all companies to implement electronic invoicing (e-invoices) on their ERP software, 
          so many small businesses have had to adapt quickly to comply. I've found there an opportunity and built a Software for this propose. Today I work remotely with 
          Commercial System, Database integrations, ERP Communication and emission of NFe, NFSe, NFCe electronic invoicing (e-invoices) for the Brazilian Fiscal System.`,            
          color: 'blue',
          year: '2019 -> ',
        },          
        {
          company: 'LK Peças Automotivas Ltda',
          job: `Analysis and research for business process management also maintaining and developing new modules for their commercial ERP system, with the issuance of 
          electronic invoicing (e-invoices) "NF-e, NFS-e, Fiscal Coupon" and generation of magnetic files for Brazilian fiscal system and Sintegra revenue. 
          Applying Data Mining techniques on the company's DataBase like linear regression, clustering, 
          and decision trees to increase sales mainly on low cost and high-profit products.`,
          color: 'cyan',
          year: '2009 - 2018',
        },
        {
          company: 'Di Hellen Cosméticos',
          job: `Development and research for business process management also maintaining and developing new modules for their internal systems. 
          Mobile development for Pocket PC platform and data integration.`,            
          color: 'green',
          year: '2008 - 2009',
        },
        {
          company: 'LK Peças Automotivas Ltda',
          job: `Building the LAN (local area network) of the company, writing their commercial ERP software and maintaining it with clipper and after with Delphi. 
          Database administration and also studying methods to increase company sales.`,            
          color: 'red',
          year: '1994 - 2008',
        },
      ],
    }),
  }
</script>