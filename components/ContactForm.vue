<template>
  <div id='crmWebToEntityForm' class='zcwf_lblTopBottom crmWebToEntityForm contactForm'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='content-type' content='text/html;charset=UTF-8'>
    <form id='webform612632000021135001' action='https://crm.zoho.eu/crm/WebToLeadForm' name='WebToLeads612632000021135001' method='POST' @submit="checkMandatory" accept-charset='UTF-8'>
      <input type='text' style='display:none;' name='xnQsjsdp' value='b027316d4952d3163b830ccac6f2c54f57532c767d3df87a67eced19ccb4ea97' />
      <input type='hidden' name='zc_gad' id='zc_gad' value='' />
      <input type='text' style='display:none;' name='xmIwtLD' value='d169ab499df12505fbdf16fe519508661cbc8010022522dce5a3854bd85d699ce560fa50cdd30440541d422899916c3d' />
      <input type='text' style='display:none;' name='actionType' value='TGVhZHM=' />
      <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;team-square.fr&#x2f;remerciement&#x2f;' />
      
      <div class="containerPage">
        <div class="senderOrigin">
          <div class="zcwf_row wfrm_fld_dpNn">
            <div class="zcwf_col_lab" style="font-size:16px;">
              <label for="Lead_Source">Origine du Piste</label>
            </div>
            <div class="zcwf_col_fld">
              <select class='zcwf_col_fld_slt' id='Lead_Source' name='Lead Source' @change="addAriaSelected">
                <option value='-None-'>-None-</option>
                <option value='Publicit&eacute;'>Publicit&eacute;</option>
                <option value='Appel&#x20;entrant'>Appel entrant</option>
                <option selected value='Site&#x20;Satellite'>Site Satellite</option>
                <option value='Site&#x20;TS&#x20;Loisir'>Site TS Loisir</option>
                <option value='Site&#x20;TS&#x20;recrutement'>Site TS recrutement</option>
                <option value='Site&#x20;TS&#x20;Event'>Site TS Event</option>
                <option value='Mariage.net'>Mariage.net</option>
                <option value='Equinoxe'>Equinoxe</option>
                <option value='R&eacute;f&eacute;rence&#x20;d&rsquo;employ&eacute;'>R&eacute;f&eacute;rence d&rsquo;employ&eacute;</option>
                <option value='Site&#x20;TS&#x20;Pro'>Site TS Pro</option>
                <option value='Partenaire'>Partenaire</option>
                <option value='Boutique&#x20;en&#x20;ligne'>Boutique en ligne</option>
                <option value='Relations&#x20;Publiques'>Relations Publiques</option>
                <option value='Arbre&#x20;de&#x20;No&euml;l&#x20;Facebook'>Arbre de No&euml;l Facebook</option>
                <option value='Salon'>Salon</option>
                <option value='Pseudo&#x20;de&#x20;messagerie&#x20;commerciale'>Pseudo de messagerie commerciale</option>
                <option value='Facebook&#x20;Anniversaire'>Facebook Anniversaire</option>
                <option value='S&eacute;minaire&#x20;Partenaire'>S&eacute;minaire Partenaire</option>
                <option value='Facebook&#x20;S&eacute;minaire'>Facebook S&eacute;minaire</option>
                <option value='1001Salles'>1001Salles</option>
                <option value='Facebook&#x20;EVG&#x2f;EVJF'>Facebook EVG&#x2f;EVJF</option>
                <option value='Facebook'>Facebook</option>
                <option value='ABCSalles'>ABCSalles</option>
                <option value='S&eacute;minaire&#x20;interne'>S&eacute;minaire interne</option>
                <option value='Twitter'>Twitter</option>
                <option value='Site&#x20;Web'>Site Web</option>
                <option value='Moteur&#x20;de&#x20;recherche'>Moteur de recherche</option>
                <option value='Conversation'>Conversation</option>
                <option value='Google&#x2b;'>Google&#x2b;</option>
                <option value='Online&#x20;Store'>Online Store</option>
                </select>
            </div>
          </div>
        </div>

        <div class="senderInfoContainer">
          <div class="senderInfoRow">
            <div class='zcwf_row'>
              <div class='zcwf_col_lab' style='font-size:16px;'>
                <label for='Last_Name'>Nom<span style='color: #EC6730;'>*</span></label>
              </div>
              <div class='zcwf_col_fld'>
                <input type='text' id='Last_Name' name='Last Name' maxlength='80' required />
              </div>
            </div>
            <div class='zcwf_row'>
              <div class='zcwf_col_lab' style='font-size:16px;'>
                <label for='First_Name'>Prénom<span style='color: #EC6730;'>*</span></label>
              </div>
              <div class='zcwf_col_fld'>
                <input type='text' id='First_Name' name='First Name' maxlength='40' required />
              </div>
            </div>
          </div>

          <div class="senderInfoRow">
            <div class="zcwf_row">
              <div class="zcwf_col_lab" style="font-size:16px;">
                <label for="Email">E-mail<span style="color: #EC6730;">*</span></label>
              </div>
              <div class="zcwf_col_fld">
                <input type='text' ftype='email' id='Email' name='Email' maxlength='100' autocomplete='false' required />
              </div>
            </div>
            <div class="zcwf_row">
              <div class="zcwf_col_lab" style="font-size:16px;">
                <label for="Phone">Téléphone<span style="color: #EC6730;">*</span></label>
              </div>
              <div class="zcwf_col_fld">
                <input type='text' id='Phone' name='Phone' maxlength='30' required />
              </div>
            </div>
          </div>
        </div>

        <div class='zcwf_row'>
          <div class='zcwf_col_lab' style='font-size:16px;'>
            <label for='LEADCF6'>Sujet de la prise de contact<span style='color: #EC6730;'>*</span></label>
          </div>
          <div class='zcwf_col_fld'>
            <select class='zcwf_col_fld_slt' id='LEADCF6' name='LEADCF6' @change="addAriaSelected" required>
              <option value='-None-'>-None-</option>
              <option value='Location&#x20;de&#x20;salle'>Location de salle</option>
              <option value='Activit&eacute;s'>Activit&eacute;s</option>
              <option value='&Eacute;v&eacute;nement'>&Eacute;v&eacute;nement</option>
              <option value='Activit&eacute;&#x20;&agrave;&#x20;domicile'>Activit&eacute; &agrave; domicile</option>
              <option value='Devis'>Devis</option>
              <option value='Service'>Service</option>
              <option value='Autre'>Autre</option>
              <option value='Entreprise'>Entreprise</option>
            </select>
          </div>
        </div>

        <div class='zcwf_row'>
          <div class='zcwf_col_lab' style='font-size:16px;'>
            <label for='LEADCF10'>Description de la demande<span style='color: #EC6730;'>*</span></label>
          </div>
          <div class='zcwf_col_fld'>
            <textarea id='LEADCF10' name='LEADCF10' rows='5' maxlength='1000' style='width: 100%;' required></textarea>
          </div>
        </div>
        
        <div class='zcwf_row'>
          <div class='zcwf_col_lab' id='reCaptchaField' style='font-size:16px;'>
            Saisissez le Captcha
          </div>
          <div class='zcwf_col_fld'>
            <input type='text' id='captchaField612632000021135001' name='enterdigest' maxlength='10' />
          </div>
        </div>

        <div class='zcwf_row'>
          <div class='zcwf_col_lab'></div>
          <div class='zcwf_col_fld'>
            <img id='imgid612632000021135001' src='https://crm.zoho.eu/crm/CaptchaServlet?formId=d169ab499df12505fbdf16fe519508661cbc8010022522dce5a3854bd85d699ce560fa50cdd30440541d422899916c3d&grpid=b027316d4952d3163b830ccac6f2c54f57532c767d3df87a67eced19ccb4ea97' />
            <a href='javascript:;' @click.prevent='reloadImg'>Relancer</a>
          </div>
        </div>

        <div class='zcwf_row'>
          <div class='zcwf_col_lab'></div>
          <div class='zcwf_col_fld'>
            <input type='submit' id='formsubmit' class='formsubmit zcwf_button CTA-orange' value='Soumettre' />
          </div>
        </div>
      </div>
    </form>
    <iframe name='captchaFrame' style='display:none;'></iframe>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const FORM_ID = '612632000021135001';
const FORM_NAME = `WebToLeads${FORM_ID}`;

useHead({
  script: [
    {
      id: 'wf_anal',
      src: `https://crm.zohopublic.eu/crm/WebFormAnalyticsServeServlet?rid=c71c326539fb18b9c706dc2213bee7abf46e59ad150d3b0d1d437d714b182fe29af62ee631e31765e7d13bc05516bb61gid351cd85754f9ca759c6c5e975edf14a2cb612d1449e606025fc24e19740c2dd8gida12d02c35c44946baffbccbe1b11f2eb0908fb61afadf0c29f751f38d579c585gide978dbfc54ed07012513f5a2544e0fa1145c27285db9c8940a0afa903874ff9c&tw=b45e9f5ae33a900eca461a2840e6bc82ac3f115ccc7dae8c0f52fbe3c3d85ba4`,
      async: true
    }
  ]
});

function addAriaSelected(event: Event) {
  const optionElem = event.target as HTMLSelectElement;
  const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
  if (previousSelectedOption) {
    previousSelectedOption.removeAttribute('aria-selected');
  }
  optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
}

function reloadImg() {
  const captcha = document.getElementById(`imgid${FORM_ID}`) as HTMLImageElement;
  if (captcha) {
    if (captcha.src.indexOf('&d') !== -1) {
      captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
    } else {
      captcha.src = captcha.src + '&d' + new Date().getTime();
    }
  }
}

function historyBack() {
  const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement | null;
  if (submitButton) {
    submitButton.removeAttribute('disabled');
  }
  reloadImg();
  window.removeEventListener('focus', historyBack);
}

function validateEmail() {
  const form = document.forms[FORM_NAME];
  if (!form) return false;
  const emailFld = form.querySelectorAll('[ftype=email]') as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < emailFld.length; i++) {
    const emailVal = emailFld[i].value;
    if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
      const atpos = emailVal.indexOf('@');
      const dotpos = emailVal.lastIndexOf('.');
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert('Veuillez entrer une adresse e-mail valide.');
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}

function checkMandatory(event: Event) {
  document.charset = "UTF-8";
  
  const mndFileds = ['First Name', 'Last Name', 'Email', 'Phone', 'LEADCF10', 'LEADCF6'];
  const fldLangVal = ['Prénom', 'Nom', 'E-mail', 'Téléphone', 'Description de la demande', 'Sujet de la prise de contact'];
  
  const form = document.forms[FORM_NAME];
  if (!form) {
    event.preventDefault();
    return false;
  }

  for (let i = 0; i < mndFileds.length; i++) {
    const fieldObj = form[mndFileds[i]];
    if (fieldObj) {
      if ((fieldObj.value.replace(/^\s+|\s+$/g, '')).length === 0) {
        if (fieldObj.type === 'file') {
          alert('Veuillez sélectionner un fichier à charger.');
          fieldObj.focus();
          event.preventDefault();
          return false;
        }
        alert(fldLangVal[i] + ' ne peut pas être vide.');
        fieldObj.focus();
        event.preventDefault();
        return false;
      } else if (fieldObj.nodeName === 'SELECT') {
        if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
          alert(fldLangVal[i] + ' ne peut être aucun.');
          fieldObj.focus();
          event.preventDefault();
          return false;
        }
      } else if (fieldObj.type === 'checkbox') {
        if (fieldObj.checked === false) {
          alert('Please accept ' + fldLangVal[i]);
          fieldObj.focus();
          event.preventDefault();
          return false;
        }
      }
    }
  }

  if (!validateEmail()) {
    event.preventDefault();
    return false;
  }

  const urlparams = new URLSearchParams(window.location.search);
  if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
    const webform = document.getElementById(`webform${FORM_ID}`);
    const service = urlparams.get('service');
    const smarturlfield = document.createElement('input');
    smarturlfield.setAttribute('type', 'hidden');
    smarturlfield.setAttribute('value', service as string);
    smarturlfield.setAttribute('name', 'service');
    if(webform) {
        webform.appendChild(smarturlfield);
    }
  }

  const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit');
  if (submitButton) {
    submitButton.setAttribute('disabled', 'true');
  }
  window.addEventListener('focus', historyBack);
  
  return true;
}

onMounted(() => {
    if (typeof document !== 'undefined') {
        const captchaField = document.getElementById(`captchaField${FORM_ID}`);
        if(captchaField) {
            captchaField.setAttribute('aria-labelledby', 'reCaptchaField');
        }

        const lastName = document.getElementById('Last_Name');
        if(lastName) {
            lastName.setAttribute('aria-required', 'true');
            lastName.setAttribute('aria-label', 'Last Name');
        }
      
        const firstName = document.getElementById('First_Name');
        if (firstName) {
            firstName.setAttribute('aria-required', 'true');
            firstName.setAttribute('aria-label', 'First Name');
        }

        const email = document.getElementById('Email');
        if (email) {
            email.setAttribute('aria-required', 'true');
            email.setAttribute('aria-label', 'Email');
        }
        
        const phone = document.getElementById('Phone');
        if (phone) {
            phone.setAttribute('aria-required', 'true');
            phone.setAttribute('aria-label', 'Phone');
        }
        
        const leadcf6 = document.getElementById('LEADCF6');
        if (leadcf6) {
            leadcf6.setAttribute('aria-required', 'true');
            leadcf6.setAttribute('aria-label', 'LEADCF6');
        }

        const leadcf10 = document.getElementById('LEADCF10');
        if(leadcf10) {
            leadcf10.setAttribute('aria-required', 'true');
            leadcf10.setAttribute('aria-label', 'LEADCF10');
        }
    }
});
</script>

<style>
.senderInfoRow {
  display: flex;
  gap: 48px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

#LEADCF10 {
  width: 100%;
}

#captchaField612632000021135001 {
  width: 100%;
}

.zcwf_col_fld input:not([type=submit]):not([type=reset]) {
  width: 100%;
}

.zcwf_col_fld input[type=submit], .zcwf_col_fld input[type=reset] {
    width: fit-content;
}

.contactForm {
  max-width: 704px;
  padding: 32px;
  margin: 64px auto;
  background: white;
  font-family: Overpass, sans-serif !important;
}

.CTA-orange {
  display: flex;
  height: 48px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: linear-gradient(180deg, #ec6730 0%, #d6511a 100%);
  color: #faf9fa;
  font-family: Overpass, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.32px;
  position: relative;
  border: none;
  cursor: pointer;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.contactForm,
input,
select,
textarea {
  font-family: Overpass, sans-serif;
  font-size: 16px;
}

.contactForm input[type="text"],
.contactForm input[type="email"],
.contactForm input[type="tel"],
.contactForm textarea {
  border: 1px solid rgba(18, 16, 16, 0.15);
  width: 100%;
  border-radius: 4px;
}

.senderOrigin {
  display: none;
}

.senderInfoContainer,
.comment {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.containerPage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}

select {
  padding: 8px;
  border: 1px solid rgba(18, 16, 16, 0.15);
  border-radius: 4px;
}

.zcwf_row {
  width: 100%;
  padding-top: 8px;
}

.zcwf_col_fld_slt {
  width: 100%;
}

.zcwf_col_fld a {
    color: #0279FF;
    text-decoration: underline;
}

@media (max-width: 1025px) {
  .senderInfoContainer {
    flex-direction: column;
  }

  .senderInfoRow {
    flex-direction: column;
    gap: 0px;
  }

  .contactForm {
    padding: 32px 8px;
    margin: 0;
    width: 100%;
  }
}
</style> 