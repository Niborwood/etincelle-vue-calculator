<script setup lang="ts">
import { TitleForm, RuleBlock } from "@/components/ui";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();
</script>

<template>
  <title-form>Règlement intérieur</title-form>
  <div class="px-8 py-12 text-2xl bg-orange-400 rounded-xl text-slate-50">
    Merci de lire attentivement notre règlement intérieur.
  </div>

  <div class="mt-8 space-y-12">
    <rule-block title="Article 1 - Inscriptions / Cotisations">
      <p>
        Les inscriptions ne sont validées que lorsque les pièces suivantes sont
        en la possession de l’association&nbsp;:
      </p>
      <ul class="list-disc list-inside">
        <li>
          Le Formulaire d’inscription rempli et signé par l’adhérent (ou son
          responsable légal s’il est mineur),
        </li>
        <li>
          Le règlement intérieur de l’association signé par l’élève et son
          responsable légal,
        </li>
        <li>
          Un certificat médical datant de moins d’un an et autorisant la
          pratique de la danse,
        </li>
        <li>
          Le chèque d’adhésion à l’association, Le total de l'année (en un ou
          trois chèques) + frais costumes.
        </li>
      </ul>
      <p>
        Si un dossier reste incomplet après le 1er octobre, l’élève sera
        contraint d’assister au cours en tant qu’observateur jusqu’à la
        régularisation de son inscription.
      </p>
      <p>
        Toute année commencée est intégralement due, les absences ne peuvent
        être déduites. Seul un arrêt définitif pour raison médicale (avec la
        présence d’un justificatif médical) donnera lieu à un remboursement au
        prorata des semaines de cours restantes (à compter de la date de
        présentation du dit justificatif). Pour les classes concours : les frais
        d'inscriptions aux concours ne sont en aucun cas remboursables.
      </p>
    </rule-block>

    <rule-block title="Article 2 - Durant les cours">
      <p>
        Les salles de danse et les vestiaires sont réservés aux élèves et aux
        professeurs, sauf cas exceptionnel (portes ouvertes, etc…).
      </p>
      <ul class="list-disc list-inside">
        <li>
          Le respect envers les autres élèves est primordial, chacun apprend à
          son rythme et aucune moquerie envers un camarade ne sera tolérée au
          sein de l’association : la cohésion et l’entente du groupe sont
          indispensables pour une bonne progression.
        </li>
        <li>
          La danse se pratique dans une tenue près du corps (legging/short,
          brassière/t-shirt moulant), et avec une coiffure laissant le visage
          dégagé. Pieds nus pour le Lyrical/Modern’Jazz, baskets propre pour le
          Street Jazz. Ne pas oublier sa bouteille d’eau.
        </li>
        <li>
          Il est essentiel que les élèves soient assidus pour la mise en place
          des chorégraphies : les absences doivent être justifiées au préalable
          auprès du professeur via sms/mail. Trop d’absences peuvent conduire à
          une pénalisation de l’élève au sein des chorégraphies.
        </li>
        <li>Les retards doivent rester exceptionnels.</li>
        <li>
          Un élève/accompagnant perturbant de façon répétée les cours sera exclu
          de façon temporaire/définitive sans remboursement.
        </li>
        <li>
          En cas d’urgence médicale pendant la durée des cours, les enfants
          seront confiés aux pompiers, et les parents avisés simultanément.
        </li>
      </ul>
    </rule-block>

    <rule-block title="Article 3 - Les locaux">
      <p>
        Il est essentiel de laisser après le cours des locaux aussi propre qu’à
        son arrivée.
      </p>
      <ul class="list-disc list-inside">
        <li>Se déchausser avant d’entrer dans la salle de danse.</li>
        <li>
          Rester silencieux dans les vestiaires afin de ne pas perturber le
          cours précédant ou suivant.
        </li>
        <li>
          Être attentif aux affaires du cours précédant ou suivant lorsque l’on
          s’installe ou quitte les vestiaires.
        </li>
        <li>La nourriture est interdite dans la salle de danse.</li>
        <li>
          Garder vestiaires, salle de danse, toilettes... aussi propres après
          notre départ qu’avant notre arrivée (valable pour tous les locaux). En
          cas de perte, vol ou casse, le professeur et l’Association ne pourront
          être tenus responsables.
        </li>
      </ul>
    </rule-block>

    <rule-block title="Article 4 - Représentations et costumes">
      <ul class="list-disc list-inside">
        <li>
          La participation aux spectacles (et concours) est obligatoire pour
          tous les élèves (sauf justification). Toute absence non justifiée
          remettra en cause l’inscription de l’élève à l’association pour la
          saison suivante, voir sa participations aux autres concours de l'année
          pour les élèves des classes concours.
        </li>
        <li>
          Les élèves (ou leurs responsables) s'engagent à respecter le planning
          des répétitions ainsi que les contraintes et les consignes liées aux
          répétitions, déplacements aux théâtres/concours. L’association ne
          prend pas en charge les déplacements des élèves.
        </li>
        <li>
          Dans des cas exceptionnels, des cours supplémentaires peuvent être
          organisés, suivant la disponibilité des locaux et de la majorité des
          élèves du cours concerné.
        </li>
        <li>
          Les costumes sont sous la responsabilité de l’élève et de ses
          responsables légaux : ils ne doivent pas être portés en dehors des
          heures de cours, et il faut les garder comme neufs jusqu’aux
          représentations. Nous laissons aux élèves le soin de se procurer des
          sous vêtements adaptés à leurs costumes, et parfois quelques éléments
          (accessoires, ect...).
        </li>
      </ul>
    </rule-block>

    <rule-block title="Article 5 - Droit à l'image">
      <ul class="list-disc list-inside">
        <li>
          Aucune prise de vidéo sans l’autorisation du professeur n’est
          autorisée.
        </li>
        <li>
          Les prises sont interdites lors des représentations sans
          l’autorisation de l’association. Si elles sont autorisées, les images
          doivent rester dans un cadre strictement familial (pas de publication
          sur les réseaux sociaux).
        </li>
        <li>
          Sur les publications des images issues de concours/spectacles doit
          paraitre le nom du professeur, de l’association, et du
          photographe/vidéaste.
        </li>
        <li>
          Si un cours est filmé/photographié : l'élève et sa famille seront
          prévenus à l'avance, et l’exploitation de ces images comme celles des
          concours et autres représentations sera faite uniquement dans le but
          de promouvoir l’association.
        </li>
        <li>
          Via ce règlement, vous autorisez l’Ecole de Danse Etincelle et son
          professeur à utiliser l’image de votre enfant (ou la votre pour les
          élèves majeurs) dans le but de faire connaître l’association.
        </li>
      </ul>
    </rule-block>
    <FormKit
      type="checkbox"
      label="J'accepte le règlement intérieur d'Etincelle"
      help="En cochant cette case, l'élève et son représentant légal acceptent l'ensemble du règlement présenté ci-dessus et s'engagent à le respecter sans réserve pour toute l'année d'inscription."
      v-model="store.areRulesChecked"
    />
  </div>
</template>
