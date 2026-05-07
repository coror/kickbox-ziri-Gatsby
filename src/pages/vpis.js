import React, { useState } from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'gatsby';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[0-9]{7,15}$/;
const today = new Date().toISOString().split('T')[0];

const inputBase =
  'px-4 py-3 bg-white border-2 focus:outline-none transition-colors duration-200 text-black';
const inputOk = 'border-text1/15 focus:border-identifier';
const inputErr = 'border-red-500 focus:border-red-500';
const inputCls = (isError) =>
  `${inputBase} ${isError ? inputErr : inputOk}`;

const Field = ({ label, htmlFor, required, error, fullWidth, children }) => (
  <div className={`flex flex-col ${fullWidth ? 'md:col-span-2' : ''}`}>
    <label
      htmlFor={htmlFor}
      className='mb-2 text-xs uppercase tracking-widest text-text1/70'
    >
      {label}
      {required && ' *'}
    </label>
    {children}
    {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
  </div>
);

const SectionHeading = ({ children }) => (
  <div className='mt-14 mb-8 first:mt-0'>
    <h2 className='text-2xl md:text-3xl font-extrabold tracking-wide'>
      {children}
    </h2>
    <div className='border-b-2 border-identifier w-12 mt-3'></div>
  </div>
);

const RadioOption = ({ id, name, value, label, checked, onChange }) => (
  <label
    htmlFor={id}
    className='flex items-center gap-3 cursor-pointer py-1'
  >
    <input
      type='radio'
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className='w-4 h-4 accent-identifier cursor-pointer'
    />
    <span>{label}</span>
  </label>
);

const Vpis = () => {
  const initialFields = {
    ime: '',
    priimek: '',
    'naslov-bivalisca': '',
    'postna-st': '',
    kraj: '',
    'datum-rojstva': '',
    telefon: '',
    email: '',
    tecaj: '',
    obisk: '',
    'druzinski-clani': '',
    dovoljenje: '',
    zastopnik: '',
    priporocilo: '',
    strinjanje: false,
  };

  const [fields, setFields] = useState(initialFields);
  const [isEdit, setIsEdit] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [surnameValid, setSurnameValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [cityNumValid, setCityNumValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [dobValid, setDobValid] = useState(true);
  const [courseValid, setCourseValid] = useState(true);
  const [attendanceValid, setAttendanceValid] = useState(true);
  const [allowValid, setAllowValid] = useState(true);
  const [formValid, setFormValid] = useState(true);
  const [agreementValid, setAgreementValid] = useState(true);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormValid(true);
    setSubmissionSuccess(false);
    setSubmissionError('');

    if (name === 'email') {
      setIsEdit(true);
      setEmailValid(value.trim() === '' || emailRegex.test(value));
    }
    if (name === 'ime') {
      setIsEdit(true);
      setNameValid(value.trim() !== '');
    }
    if (name === 'priimek') {
      setIsEdit(true);
      setSurnameValid(value.trim() !== '');
    }
    if (name === 'naslov-bivalisca') {
      setIsEdit(true);
      setAddressValid(value.trim() !== '');
    }
    if (name === 'postna-st') {
      setIsEdit(true);
      setCityNumValid(value.trim() !== '');
    }
    if (name === 'kraj') {
      setIsEdit(true);
      setCityValid(value.trim() !== '');
    }
    if (name === 'telefon') {
      setIsEdit(true);
      setPhoneValid(value.trim() === '' || phoneRegex.test(value));
    }
    if (name === 'datum-rojstva') {
      setIsEdit(true);
      setDobValid(value.trim() !== '');
    }
    if (name === 'tecaj') {
      setIsEdit(true);
      setCourseValid(true);
    }
    if (name === 'obisk') {
      setIsEdit(true);
      setAttendanceValid(true);
    }
    if (name === 'dovoljenje') {
      setIsEdit(true);
      setAllowValid(true);
    }
    if (name === 'strinjanje') {
      setIsEdit(true);
      setAgreementValid(checked);
      setFields((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (type === 'checkbox') {
      setFields((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFields((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setIsEdit(false);
      setEmailValid(value.trim() !== '' && emailRegex.test(value));
    }
    if (name === 'ime') {
      setIsEdit(false);
      setNameValid(value.trim() !== '');
    }
    if (name === 'priimek') {
      setIsEdit(false);
      setSurnameValid(value.trim() !== '');
    }
    if (name === 'naslov-bivalisca') {
      setIsEdit(false);
      setAddressValid(value.trim() !== '');
    }
    if (name === 'postna-st') {
      setIsEdit(false);
      setCityNumValid(value.trim() !== '');
    }
    if (name === 'kraj') {
      setIsEdit(false);
      setCityValid(value.trim() !== '');
    }
    if (name === 'telefon') {
      setIsEdit(false);
      setPhoneValid(value.trim() !== '' && phoneRegex.test(value));
    }
    if (name === 'datum-rojstva') {
      setIsEdit(false);
      setDobValid(value.trim() !== '');
    }
  };

  const validateAllFields = () => {
    const isNameValid = fields.ime.trim() !== '';
    const isSurnameValid = fields.priimek.trim() !== '';
    const isAddressValid = fields['naslov-bivalisca'].trim() !== '';
    const isCityNumValid = fields['postna-st'].trim() !== '';
    const isCityValid = fields.kraj.trim() !== '';
    const isPhoneValid = phoneRegex.test(fields.telefon);
    const isEmailValid = emailRegex.test(fields.email);
    const isDobValid = fields['datum-rojstva'].trim() !== '';
    const isCourseValid = fields.tecaj !== '';
    const isAttendanceValid = fields.obisk !== '';
    const isAllowValid = fields.dovoljenje !== '';
    const isAgreementValid = fields.strinjanje;

    setNameValid(isNameValid);
    setSurnameValid(isSurnameValid);
    setAddressValid(isAddressValid);
    setCityNumValid(isCityNumValid);
    setCityValid(isCityValid);
    setPhoneValid(isPhoneValid);
    setEmailValid(isEmailValid);
    setDobValid(isDobValid);
    setCourseValid(isCourseValid);
    setAttendanceValid(isAttendanceValid);
    setAllowValid(isAllowValid);
    setAgreementValid(isAgreementValid);

    return (
      isNameValid &&
      isSurnameValid &&
      isAddressValid &&
      isCityNumValid &&
      isCityValid &&
      isPhoneValid &&
      isEmailValid &&
      isDobValid &&
      isCourseValid &&
      isAttendanceValid &&
      isAllowValid &&
      isAgreementValid
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateAllFields();
    if (!isValid) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
    setLoading(true);
    setSubmissionError('');

    const datumRojstvaDateObj = new Date(fields['datum-rojstva']);
    const datumRojstvaFormatted = datumRojstvaDateObj
      .toDateString()
      .split(' ')
      .splice(1)
      .join(' ');

    try {
      const url =
        'https://karatefunctionapp.azurewebsites.net/api/processforminput';
      const rawBody = {
        Ime: fields.ime,
        Priimek: fields.priimek,
        NaslovBivalisca: fields['naslov-bivalisca'],
        PostnaSt: fields['postna-st'],
        Kraj: fields.kraj,
        DatumRoj: datumRojstvaFormatted,
        Telefon: fields.telefon,
        Email: fields.email,
        Tecaj: fields.tecaj,
        Obisk: fields.obisk,
        DruClani: fields['druzinski-clani'],
        Dovoljenje: fields.dovoljenje,
        Zastopnik: fields.zastopnik,
        Priporocilo: fields.priporocilo,
        Strinjanje: fields.strinjanje,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-functions-key': process.env.GATSBY_AZURE_API_FUNCTIONS_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawBody),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setFields(initialFields);
      } else {
        setSubmissionError('Ups, prišlo je do napake. Prosimo, poskusite znova.');
      }
    } catch (error) {
      setSubmissionError(`Napaka pri pošiljanju: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className='-mt-20 font-oswald'>
        <div className='relative w-full min-h-[40vh] md:min-h-[70vh] overflow-hidden'>
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723159813/karate-kickbox-ostalo/goardssdi7slsfgaji5q.jpg'
            alt='Vpis'
            className='!absolute inset-0 w-full h-full'
            imgClassName='!scale-150 !origin-top md:!scale-100 md:!origin-center'
            loading='eager'
            placeholder='blurred'
            objectFit='cover'
            objectPosition='center 40%'
            layout='fullWidth'
            quality={100}
            formats={['auto', 'webp', 'avif']}
            breakpoints={[750, 1080, 1366, 1920, 2560]}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-10'></div>
          <div className='relative z-20 flex items-center justify-center min-h-[40vh] md:min-h-[70vh] pt-20'>
            <div className='text-center text-text1 px-6 animate-fade-up animate-duration-1000'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight'>
                VPIS
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5 mx-auto animate-fade-up animate-duration-1000 animate-delay-500'></div>
            </div>
          </div>
        </div>

        <div className='bg-layout2 text-text1 py-16 md:py-24'>
          <form
            className='max-w-3xl mx-auto px-6 md:px-8'
            action='/submit'
            method='post'
            onSubmit={handleSubmit}
          >
            <SectionHeading>OSEBNI PODATKI</SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'>
              <Field
                label='IME'
                htmlFor='ime'
                required
                error={!nameValid && 'Prosim vnesite ime.'}
              >
                <input
                  type='text'
                  id='ime'
                  name='ime'
                  className={inputCls(!nameValid)}
                  value={fields.ime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label='PRIIMEK'
                htmlFor='priimek'
                required
                error={!surnameValid && 'Prosim vnesite priimek.'}
              >
                <input
                  type='text'
                  id='priimek'
                  name='priimek'
                  className={inputCls(!surnameValid)}
                  value={fields.priimek}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label='NASLOV BIVALIŠČA'
                htmlFor='naslov-bivalisca'
                required
                fullWidth
                error={
                  !addressValid && !isEdit && 'Prosim vnesite ime ulice.'
                }
              >
                <input
                  type='text'
                  id='naslov-bivalisca'
                  name='naslov-bivalisca'
                  className={inputCls(!addressValid && !isEdit)}
                  value={fields['naslov-bivalisca']}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label='POŠTNA ŠT.'
                htmlFor='postna-st'
                required
                error={
                  !cityNumValid && !isEdit && 'Prosim vnesite poštno številko.'
                }
              >
                <input
                  type='number'
                  id='postna-st'
                  name='postna-st'
                  className={inputCls(!cityNumValid && !isEdit)}
                  value={fields['postna-st']}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label='KRAJ'
                htmlFor='kraj'
                required
                error={!cityValid && !isEdit && 'Prosim vnesite kraj.'}
              >
                <input
                  type='text'
                  id='kraj'
                  name='kraj'
                  className={inputCls(!cityValid && !isEdit)}
                  value={fields.kraj}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label='DATUM ROJSTVA'
                htmlFor='datum-rojstva'
                required
                error={
                  !dobValid && !isEdit && 'Prosim izberite datum rojstva.'
                }
              >
                <input
                  type='date'
                  id='datum-rojstva'
                  name='datum-rojstva'
                  className={inputCls(!dobValid && !isEdit)}
                  value={fields['datum-rojstva']}
                  onChange={handleChange}
                  lang='sl'
                  max={today}
                />
              </Field>

              <Field
                label='ŠT. MOBILNEGA TELEFONA (za pošiljanje obvestil po SMS)'
                htmlFor='telefon'
                required
                error={
                  !phoneValid && !isEdit && 'Prosim vnesite veljavno številko telefona.'
                }
              >
                <input
                  type='tel'
                  id='telefon'
                  name='telefon'
                  inputMode='tel'
                  className={inputCls(!phoneValid && !isEdit)}
                  value={fields.telefon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field
                label='ELEKTRONSKA POŠTA'
                htmlFor='email'
                required
                fullWidth
                error={
                  !emailValid && !isEdit && 'Prosim vnesite veljaven elektronski naslov.'
                }
              >
                <input
                  type='email'
                  id='email'
                  name='email'
                  className={inputCls(!emailValid && !isEdit)}
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>
            </div>

            <SectionHeading>TEČAJ</SectionHeading>

            <Field
              label='VPISUJEM SE V TEČAJ'
              htmlFor='tecaj'
              required
              error={!courseValid && !isEdit && 'Prosim izberite tečaj.'}
            >
              <div className='flex flex-col gap-1 mt-1'>
                <RadioOption
                  id='mladostniki'
                  name='tecaj'
                  value='kickbox_mladostniki_ziri'
                  label='Kickbox Mladostniki'
                  checked={fields.tecaj === 'kickbox_mladostniki_ziri'}
                  onChange={handleChange}
                />
                <RadioOption
                  id='odrasli'
                  name='tecaj'
                  value='kickbox_odrasli_ziri'
                  label='Kickbox Odrasli'
                  checked={fields.tecaj === 'kickbox_odrasli_ziri'}
                  onChange={handleChange}
                />
              </div>
            </Field>

            <div className='mt-6'>
              <Field
                label='TEČAJ BOM OBISKOVAL (TEDENSKO)'
                htmlFor='obisk'
                required
                error={
                  !attendanceValid && !isEdit && 'Prosim izberite frekvenco obiska.'
                }
              >
                <div className='flex flex-col gap-1 mt-1'>
                  <RadioOption
                    id='2x'
                    name='obisk'
                    value='2x'
                    label='2x'
                    checked={fields.obisk === '2x'}
                    onChange={handleChange}
                  />
                  <RadioOption
                    id='1x'
                    name='obisk'
                    value='1x'
                    label='1x'
                    checked={fields.obisk === '1x'}
                    onChange={handleChange}
                  />
                </div>
              </Field>
            </div>

            <div className='mt-6'>
              <Field
                label='VPIŠITE IMENA DRUGIH DRUŽINSKIH ČLANOV, KI SO VKLJUČENI V NAŠE PROGRAME (upoštevanje popusta)'
                htmlFor='druzinski-clani'
              >
                <textarea
                  id='druzinski-clani'
                  name='druzinski-clani'
                  rows={3}
                  className={`${inputCls(false)} resize-none`}
                  onChange={handleChange}
                  value={fields['druzinski-clani']}
                />
              </Field>
            </div>

            <div className='mt-6'>
              <Field
                label='ZASTOPNIK (če si mladoleten/a, vpiši ime in priimek starša oz. zakonitega zastopnika)'
                htmlFor='zastopnik'
              >
                <input
                  type='text'
                  id='zastopnik'
                  name='zastopnik'
                  className={inputCls(false)}
                  onChange={handleChange}
                  value={fields.zastopnik}
                />
              </Field>
            </div>

            <div className='mt-6'>
              <Field
                label='V KLUB SE VČLANJUJEM PO PRIPOROČILU (ime in priimek našega člana)'
                htmlFor='priporocilo'
              >
                <textarea
                  id='priporocilo'
                  name='priporocilo'
                  rows={2}
                  className={`${inputCls(false)} resize-none`}
                  onChange={handleChange}
                  value={fields.priporocilo}
                />
              </Field>
            </div>

            <SectionHeading>SOGLASJA</SectionHeading>

            <Field
              label='Dovoljujem, da se izpolnjeni podatki in podatki o mojih tekmovalnih uspehih ter fotografije s tekmovanj ali treningov uporabljajo za potrebe Karate instituta, Karate kluba Kolektor Idrija, Karate kluba Cerkno ali Karate kluba Žiri.'
              htmlFor='dovoljenje'
              required
              error={!allowValid && 'Prosimo, izberite.'}
            >
              <div className='flex gap-6 mt-2'>
                <RadioOption
                  id='da'
                  name='dovoljenje'
                  value='da'
                  label='DA'
                  checked={fields.dovoljenje === 'da'}
                  onChange={handleChange}
                />
                <RadioOption
                  id='ne'
                  name='dovoljenje'
                  value='ne'
                  label='NE'
                  checked={fields.dovoljenje === 'ne'}
                  onChange={handleChange}
                />
              </div>
            </Field>

            <div className='mt-8 p-5 bg-white border border-text1/15'>
              <label
                htmlFor='strinjanje'
                className='flex items-start gap-3 cursor-pointer text-black'
              >
                <input
                  type='checkbox'
                  id='strinjanje'
                  name='strinjanje'
                  className='mt-1 w-4 h-4 accent-identifier cursor-pointer shrink-0'
                  checked={fields.strinjanje}
                  onChange={handleChange}
                />
                <span className='text-sm leading-relaxed'>
                  Se strinjam s{' '}
                  <Link
                    to='/pogoji-uporabe/'
                    className='text-identifier hover:underline'
                  >
                    pogoji uporabe in varovanjem osebnih podatkov.
                  </Link>
                </span>
              </label>
              {!agreementValid && (
                <p className='text-red-500 text-sm mt-2'>
                  Za uspešno prijavo se je potrebno strinjati.
                </p>
              )}
            </div>

            <div className='mt-10 text-center'>
              <button
                type='submit'
                disabled={loading}
                className='inline-flex items-center justify-center min-w-[12rem] bg-identifier border-2 border-identifier py-3 px-8 text-lg lg:text-xl text-text1 cursor-pointer hover:text-identifier hover:bg-transparent transition-colors duration-200 ease-in-out tracking-wider disabled:opacity-60 disabled:cursor-not-allowed'
              >
                {loading ? (
                  <ClipLoader size={22} color='currentColor' />
                ) : (
                  'PRIJAVA'
                )}
              </button>
            </div>

            {!formValid && (
              <p className='text-red-500 mt-4 text-center'>
                Prosim izpolnite vsa obvezna polja.
              </p>
            )}
            {submissionError && (
              <p className='text-red-500 mt-4 text-center'>{submissionError}</p>
            )}
            {submissionSuccess && formValid && (
              <p className='text-emerald-400 mt-4 text-center font-semibold'>
                Prijava je bila uspešno poslana!
              </p>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Vpis;

export const Head = ({ location }) => (
  <Seo
    pathname={location.pathname}
    title='Vpis'
    description='Vpišite se v naše kickboks programe za mladostnike in odrasle v Karate klubu Žiri. Pod vodstvom izkušenih trenerjev boste razvijali moč, vzdržljivost in samoobrambne spretnosti. Naši treningi so zasnovani tako, da vam pomagajo doseči vaše fitnes cilje, hkrati pa spodbujajo samozavest in zdrav življenjski slog. Pridružite se zdaj in izkusite intenzivnost in energijo kickboksa v motivirajočem okolju.'
  />
);
