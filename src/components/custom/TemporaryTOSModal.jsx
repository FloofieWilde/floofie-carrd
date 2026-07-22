import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../../config.json'

const terms = [
  {
    title: '1. Général',
    paragraphs: [
      'En passant une commande, vous confirmez avoir lu et accepté ces Conditions de Service.',
      "Je me réserve le droit de refuser une commande pour toute raison, notamment si celle-ci est contraire à mes valeurs, aux lois en vigueur ou aux conditions d'utilisation des logiciels et plateformes concernés."
    ]
  },
  {
    title: '2. Paiement',
    paragraphs: [
      "Le paiement s'effectue via PayPal, virement bancaire, ou Wero.",
      'Un acompte de 50 % sera demandé avant le début du travail sur le prix estimé.',
      "Les paiements ne sont pas remboursables une fois le travail commencé, sauf exception décidée à ma discrétion.",
      'Toute commande qui n’est pas complétement payée reste ma propriété jusqu’au paiement final.',
      'Tout budget non consommé sera retiré du prix final.'
    ]
  },
  {
    title: '3. Délais',
    paragraphs: [
      'Les délais sont donnés à titre estimatif et peuvent varier selon la complexité du projet, ma charge de travail ou des circonstances imprévues.',
      'Les commissions sont mon side-job, mon boulot-passion. Je ne suis pas 24/7 en train de les travailler. Cependant, je peux ou ne peux pas répondre aux demandes pendant la journée.',
      'En cas de retard important, le client sera informé.'
    ]
  },
  {
    title: '4. Révisions',
    paragraphs: [
      'Les révisions mineures sont incluses pendant le processus de création.',
      "Les changements majeurs ou les demandes effectuées après validation d'une étape peuvent entraîner des frais supplémentaires.",
      'Toute demande modifiant significativement le cahier des charges initial sera considérée comme une nouvelle prestation.'
    ]
  },
  {
    title: '5. Assets et droits',
    paragraphs: [
      "Le client doit posséder les droits d'utilisation des assets qu'il fournit.",
      'Le maker ne fournit et ne travaille pas sur des assets piratés ou obtenus illégalement.',
      'Les assets achetés sous licence personnelle restent soumis aux conditions de leur créateur. Si la licence n’est pas possédée et nécessaire par le maker, une participation forfaitaire peut être demandée.',
      'Toute licence commerciale possédée ou non par le maker peut faire objet de participation forfaitaire du client, minorée et présentée en fonction de l’asset.'
    ]
  },
  {
    title: '6. Livraison',
    paragraphs: [
      'Les fichiers livrés correspondent uniquement à ce qui est convenu lors de la commande.',
      'Le maker n’est pas tenu de fournir :'
    ],
    items: [
      'Les fichiers sources non prévus',
      'Les modèles 3D source',
      'Les projets Substance Painter',
      'Ou tout autre fichier de travail interne.'
    ]
  },
  {
    title: '7. Support après livraison',
    paragraphs: [
      'Le maker pourra corriger gratuitement les erreurs provenant directement de mon travail si elles sont signalées dans un délai raisonnable.',
      'Les problèmes causés par une mise à jour de VRChat, Unity, d’un SDK, ou des modifications réalisées par le client, peuvent faire l\'objet d\'une nouvelle prestation payante.'
    ]
  },
  {
    title: '8. Annulation',
    paragraphs: [
      'Si le client annule avant le début des travaux, un remboursement complet peut être effectué.',
      "Si le travail est déjà commencé, le remboursement sera calculé en fonction de l'avancement du projet.",
      'Une commande abandonnée sans réponse du client pendant plus de 30 jours pourra être considérée comme annulée.'
    ]
  },
  {
    title: '9. Droit de présentation',
    paragraphs: [
      'Sauf demande contraire formulée avant le début de la commande, je me réserve le droit de présenter le travail réalisé dans mon portfolio, sur les réseaux sociaux ou comme exemple de mes réalisations.'
    ]
  },
  {
    title: '10. Upload',
    paragraphs: [
      'Le client peut choisir ou non un service d’upload des différentes versions de son avatar.',
      'Si le client demande de ne pas se faire upload son avatar par le maker, alors un export du travail sans fichiers source sera effectuée. L’upload sera alors à la charge du client sans aide du maker.',
      'En cas de service d’upload :'
    ],
    items: [
      'Le client doit fournir un accès temporaire à son compte VRChat. Cela inclus mot de passe et code double authentificateur du compte.',
      'Un changement de mot de passe est encouragé avant et après upload.',
      "Je m'engage à ne pas utiliser le compte du client à d'autres fins que l'upload de l'avatar.",
      'Une fois l\'avatar uploadé et vérifié, la prestation est considérée comme terminée, sauf si débug nécessaire.'
    ]
  },
  {
    title: "11. Politique concernant l'IA",
    items: [
      'Les avatars, modifications et créations réalisés dans le cadre de cette commission sont entièrement réalisés manuellement et ne reposent pas sur une génération automatique par intelligence artificielle.',
      'Les avatars commandés ne pourront pas être utilisés pour entrainer d’IA.'
    ]
  }
]

const buildOpenSections = (isOpen) =>
  terms.reduce((acc, term) => {
    acc[term.title] = isOpen
    return acc
  }, {})

const TemporaryTOSModal = ({ headerSlot }) => {
  const [openSections, setOpenSections] = useState(() => buildOpenSections(true))

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const openAllSections = () => {
    setOpenSections(buildOpenSections(true))
  }

  const collapseAllSections = () => {
    setOpenSections(buildOpenSections(false))
  }

  return (
    <SModal>
      <SHeaderRow>
        <SHeading>Conditions Générales de Service</SHeading>
        <SControls>
          <SActionButton type="button" onClick={openAllSections}>Open all</SActionButton>
          <SActionButton type="button" onClick={collapseAllSections}>Collapse all</SActionButton>
        </SControls>
        {headerSlot}
      </SHeaderRow>

      {terms.map((section) => (
        <SSection key={section.title}>
          <SToggleButton
            type="button"
            onClick={() => toggleSection(section.title)}
            aria-expanded={Boolean(openSections[section.title])}
          >
            <SSectionTitle>{section.title}</SSectionTitle>
            <SChevron isOpen={Boolean(openSections[section.title])}>▾</SChevron>
          </SToggleButton>

          <SSectionContent isOpen={Boolean(openSections[section.title])}>
            <SSectionContentInner isOpen={Boolean(openSections[section.title])}>
              {section.paragraphs?.map((paragraph) => (
                <SParagraph key={paragraph}>{paragraph}</SParagraph>
              ))}

              {section.items?.length ? (
                <SList>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </SList>
              ) : null}
            </SSectionContentInner>
          </SSectionContent>

        </SSection>
      ))}
    </SModal>
  )
}

const SModal = styled.div`
  max-height: min(75vh, 900px);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  box-sizing: border-box;
  border-radius: 16px;
  color: ${config.theme.text};

  * {
    box-sizing: border-box;
  }
`

const SHeading = styled.h2`
  color: ${config.theme.text};
  font-size: 1.3rem;
  margin:0 !important;
`

const SHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

`

const SControls = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`

const SActionButton = styled.button`
  border: none;
  border-radius: 48px;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
  color: ${config.theme.text};
  background: linear-gradient(
    90deg,
    ${config.theme.primary}22 0%,
    ${config.theme.secondary}22 100%
  );
  transition: background 0.25s ease-in-out;

  &:hover {
    background: linear-gradient(
      -90deg,
      ${config.theme.primary}22 0%,
      ${config.theme.secondary}22 100%
    );
  }
`

const SSection = styled.section`
  margin: 8px 0;

  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    ${config.theme.primary}1f 0%,
    ${config.theme.secondary}1f 100%
  );
  transition: background 0.3s ease-out;

  &:hover {
    background: linear-gradient(
      -90deg,
      ${config.theme.primary}1f 0%,
      ${config.theme.secondary}1f 100%
    );
  }

  &:first-of-type {
    margin-top: 0;
  }
`

const SToggleButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: none;
  color: ${config.theme.text};
  border-radius: 0;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
`

const SSectionTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`

const SChevron = styled.span`
  font-size: 1.1rem;
  color: ${config.theme.secondary};
  transform: rotate(${(props) => (props.isOpen ? 0 : -90)}deg);
  transition: transform 0.2s ease-in-out;
`

const SSectionContent = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.28s ease-in-out;
  background: transparent;
`

const SSectionContentInner = styled.div`
  min-height: 0;
  overflow: hidden;
  padding: ${(props) => (props.isOpen ? '12px' : '0')};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SParagraph = styled.p`
  margin: 0;
  line-height: 1.45;
`

const SList = styled.ul`
  margin: 0;
  padding-left: 20px;
  line-height: 1.45;

  li {
    margin-bottom: 8px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export default TemporaryTOSModal