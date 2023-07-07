import Image from 'next/image';

function Whatsapp() {
  const handleOpenChat = () => {
    const phoneNumber = '+27645722714';
    const message = encodeURIComponent('Hello, I have a question about your security solutions.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');
  };

  return (
    <>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/whatsapp.png?alt=media&token=abc34a65-86b3-43ed-bcd3-426107c8a4a2"
        alt="whatsapp"
        width={100}
        height={100}
        onClick={handleOpenChat}
        layout="fixed"
      />
      <span>Open WhatsApp Chat</span>
    </>
  );
}

export default Whatsapp;
