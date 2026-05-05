const request = require("request");
const fs = require("fs");

module.exports = {
  config: {
    name: 'juice',
    aliases: ['juce', 'jus', 'juus', 'drink', 'juice'],
    description: 'Send a juice image',
    credits: "SARDAR RDX",
    usage: '.juice',
    category: 'Fun',
    adminOnly: false,
    prefix: true
  },

  async run({ api, event, send }) {
    const images = [
  "https://i.ibb.co/TBHZn1dp/Obj001.webp",
  "https://i.ibb.co/Myhrnfqy/Obj002.webp",
  "https://i.ibb.co/Lhqy2rDW/Obj003.webp",
  "https://i.ibb.co/2YWPkxqk/Obj004.webp",
  "https://i.ibb.co/35p5T0zb/Obj005.jpg",
  "https://i.ibb.co/tw4V3L56/Obj006.png",
  "https://i.ibb.co/6c6kpPFt/Obj007.png",
  "https://i.ibb.co/hQhTWjD/Obj008.jpg",
  "https://i.ibb.co/mCktYjmL/Obj009.jpg",
  "https://i.ibb.co/ZjTv7vF/Obj010.jpg",
  "https://i.ibb.co/4wq2yvSW/Obj011.jpg",
  "https://i.ibb.co/jPtQh7jS/Obj012.jpg",
  "https://i.ibb.co/whywmGXz/Obj013.jpg",
  "https://i.ibb.co/Y4fWRC1h/Obj014.jpg",
  "https://i.ibb.co/nMYGqc51/Obj015.jpg",
  "https://i.ibb.co/svZVZ93B/Obj016.jpg",
  "https://i.ibb.co/gFdYC1Xq/Obj017.jpg",
  "https://i.ibb.co/990VZ3rT/Obj018.jpg",
  "https://i.ibb.co/hFYYxpTW/Obj019.jpg",
  "https://i.ibb.co/671vJmwG/Obj020.jpg",
  "https://i.ibb.co/bV2MdXH/Obj021.jpg",
  "https://i.ibb.co/LXpYw7Kj/Obj022.jpg",
  "https://i.ibb.co/DHsfjPXd/Obj023.webp",
  "https://i.ibb.co/NdvPW4FR/Obj024.webp",
  "https://i.ibb.co/fzdp9MKW/Obj025.webp",
  "https://i.ibb.co/RTNnr0pK/Obj026.jpg",
  "https://i.ibb.co/Fq6tZr3m/Obj027.png",
  "https://i.ibb.co/BK6Bkzj0/Obj028.png",
  "https://i.ibb.co/5xhBCKV5/Obj029.png",
  "https://i.ibb.co/VYCTQxTh/Obj030.png",
  "https://i.ibb.co/JR8XyCYm/Obj031.png",
  "https://i.ibb.co/v4QtSmdB/Obj032.png",
  "https://i.ibb.co/wFvvCJcv/Obj033.jpg",
  "https://i.ibb.co/BWq5gbP/Obj034.jpg",
  "https://i.ibb.co/XZWVT7J4/Obj035.webp",
  "https://i.ibb.co/ZRwvCWWR/Obj036.webp",
  "https://i.ibb.co/zHxr4jQW/Obj037.webp",
  "https://i.ibb.co/4R61vTBd/Obj038.jpg",
  "https://i.ibb.co/FqCcr47K/Obj039.jpg",
  "https://i.ibb.co/YBz3fXqG/Obj040.jpg",
  "https://i.ibb.co/6RtMSZy4/Obj041.jpg",
  "https://i.ibb.co/W4mC7dkW/Obj042.jpg",
  "https://i.ibb.co/jvnWJ2g2/Obj043.jpg",
  "https://i.ibb.co/h1tc2qxs/Obj044.jpg",
  "https://i.ibb.co/YFcW3TLM/Obj045.jpg",
  "https://i.ibb.co/5hPZqvz4/Obj046.jpg",
  "https://i.ibb.co/Pv0ZtQtP/Obj047.png",
  "https://i.ibb.co/vvr10Bcx/Obj048.png",
  "https://i.ibb.co/zWqRjYMj/Obj049.png",
  "https://i.ibb.co/q3qtkx5N/Obj050.png",
  "https://i.ibb.co/3YQM8808/Obj051.png",
  "https://i.ibb.co/v60QKVBG/Obj052.jpg",
  "https://i.ibb.co/dJxF2kmT/Obj053.jpg",
  "https://i.ibb.co/mFPY9rLC/Obj054.jpg",
  "https://i.ibb.co/FLKfX3Pc/Obj055.jpg",
  "https://i.ibb.co/SDjWfbNh/Obj056.jpg",
  "https://i.ibb.co/ZpGkKjSC/Obj057.jpg",
  "https://i.ibb.co/F4Ly8JfN/Obj058.jpg",
  "https://i.ibb.co/dwXYtZnF/Obj059.jpg",
  "https://i.ibb.co/6j9jgSQ/Obj060.jpg",
  "https://i.ibb.co/391fb5SG/Obj061.webp",
  "https://i.ibb.co/bSHtpqC/Obj062.png",
  "https://i.ibb.co/ksjDkk5j/Obj063.jpg",
  "https://i.ibb.co/W4qDWk40/Obj067.jpg",
  "https://i.ibb.co/mFTtbXYK/Obj068.jpg",
  "https://i.ibb.co/Hp9qy31N/Obj069.webp",
  "https://i.ibb.co/1GYR5vYh/Obj070.webp",
  "https://i.ibb.co/XxHS05KV/Obj071.jpg",
  "https://i.ibb.co/MxYXpzyZ/Obj072.jpg",
  "https://i.ibb.co/Fk4FL6fS/Obj073.jpg",
  "https://i.ibb.co/XZyzp7Js/Obj074.jpg",
  "https://i.ibb.co/N64v2FfY/Obj075.jpg",
  "https://i.ibb.co/KxJVMfFN/Obj076.jpg",
  "https://i.ibb.co/4gNJVtHk/Obj077.jpg",
  "https://i.ibb.co/s9F983v1/Obj078.jpg",
  "https://i.ibb.co/ch9z9HRh/Obj079.jpg",
  "https://i.ibb.co/ZpvtmDhS/Obj080.jpg",
  "https://i.ibb.co/Csp8GTjw/Obj081.png",
  "https://i.ibb.co/spft9ykw/Obj082.png",
  "https://i.ibb.co/Nd7BNvrX/Obj083.jpg",
  "https://i.ibb.co/3ypd78S9/Obj084.jpg",
  "https://i.ibb.co/mrnjDdfk/Obj085.png",
  "https://i.ibb.co/1tdBvfPP/Obj086.jpg",
  "https://i.ibb.co/23vPh2MR/Obj088.png",
  "https://i.ibb.co/Xf5byvn9/Obj089.png",
  "https://i.ibb.co/Q3445htL/Obj090.png",
  "https://i.ibb.co/WpqJ04tN/Obj091.png",
  "https://i.ibb.co/s93W0gfD/Obj092.jpg",
  "https://i.ibb.co/sdjMMHfx/Obj093.jpg",
  "https://i.ibb.co/fYCfcz6T/Obj094.webp",
  "https://i.ibb.co/qfcpjDn/Obj095.jpg",
  "https://i.ibb.co/7dKJkP8R/Obj096.jpg",
  "https://i.ibb.co/7dwfrrFZ/Obj097.jpg",
  "https://i.ibb.co/k2fTCs13/Obj098.png",
  "https://i.ibb.co/sJNVQbXR/Obj099.png",
  "https://i.ibb.co/svyCW4KD/Obj100.png",
  "https://i.ibb.co/sphjXbX4/Obj101.png",
  "https://i.ibb.co/bMNXsLRw/Obj102.png",
  "https://i.ibb.co/jk95Zypd/Obj103.png",
  "https://i.ibb.co/YF4VR2SZ/Obj104.png",
  "https://i.ibb.co/zHFRZkDg/Obj105.jpg",
  "https://i.ibb.co/Qv65gLNB/Obj106.jpg",
  "https://i.ibb.co/NnrDxfK9/Obj107.jpg",
  "https://i.ibb.co/DD790vc5/Obj108.jpg",
  "https://i.ibb.co/XkpzB3N7/Obj109.png",
  "https://i.ibb.co/nNv1T4MV/Obj110.jpg",
  "https://i.ibb.co/M5VDCN4n/Obj111.jpg",
  "https://i.ibb.co/6ccRHPq7/Obj112.jpg",
  "https://i.ibb.co/21bTvdCv/Obj113.png",
  "https://i.ibb.co/0RK5B5bV/Obj114.jpg",
  "https://i.ibb.co/X9z3F9b/Obj115.jpg",
  "https://i.ibb.co/67gW9qrW/Obj116.jpg",
  "https://i.ibb.co/QBf16Bs/Obj117.jpg",
  "https://i.ibb.co/twZk4YKw/Obj118.jpg",
  "https://i.ibb.co/YFwCYjMx/Obj119.jpg",
  "https://i.ibb.co/PksXTmF/Obj120.jpg",
  "https://i.ibb.co/Nd1RT85b/Obj121.jpg",
  "https://i.ibb.co/8gTVyLky/Obj122.jpg",
  "https://i.ibb.co/7J5gCf9d/Obj123.webp",
  "https://i.ibb.co/jvWbSHL6/Obj124.webp",
  "https://i.ibb.co/8LgV6mzC/Obj125.jpg",
  "https://i.ibb.co/6RD2N4DT/Obj126.webp",
  "https://i.ibb.co/p62h95nc/Obj127.webp",
  "https://i.ibb.co/GfdszFVT/Obj128.jpg",
  "https://i.ibb.co/TDyynqnM/Obj129.webp",
  "https://i.ibb.co/7tqPM0Zr/Obj130.webp",
  "https://i.ibb.co/MDfRwt9b/Obj131.webp",
  "https://i.ibb.co/9mVc8w8k/Obj132.jpg",
  "https://i.ibb.co/pr98NyVB/Obj133.jpg",
  "https://i.ibb.co/twgMpGcT/Obj134.webp",
  "https://i.ibb.co/JWJHFdMR/Obj135.jpg",
  "https://i.ibb.co/CpjbyLsP/Obj136.webp",
  "https://i.ibb.co/0W4myHb/Obj137.jpg",
  "https://i.ibb.co/Z6hjfSDV/Obj138.jpg",
  "https://i.ibb.co/5Xm0F6PZ/Obj139.jpg",
  "https://i.ibb.co/cKdJKr2M/Obj140.jpg",
  "https://i.ibb.co/7x8ry6G0/Obj141.jpg",
  "https://i.ibb.co/dwtmyN5Y/Obj142.jpg",
  "https://i.ibb.co/YT2N0NDc/Obj143.jpg",
  "https://i.ibb.co/ZRvQjSDb/Obj144.jpg",
  "https://i.ibb.co/7Nv5HZB7/Obj145.jpg",
  "https://i.ibb.co/CpB6vQ8D/Obj146.jpg",
  "https://i.ibb.co/cXS890Fn/Obj147.jpg",
  "https://i.ibb.co/Z6JMSjTr/Obj148.jpg",
  "https://i.ibb.co/hxspsRJY/Obj149.jpg",
  "https://i.ibb.co/1f1VCMnY/Obj150.jpg",
  "https://i.ibb.co/B2LFNwbC/Obj151.jpg",
  "https://i.ibb.co/C5pzjWLg/Obj152.jpg",
  "https://i.ibb.co/Vc1Sy36G/Obj153.png",
  "https://i.ibb.co/Rks7Vcb1/Obj154.jpg"
];

    const randomImg = images[Math.floor(Math.random() * images.length)];
    
    try {
      const cacheDir = __dirname + "/cache";
      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }

      const imgPath = cacheDir + "/juice_" + Date.now() + ".jpg";

      return request(encodeURI(randomImg))
        .pipe(fs.createWriteStream(imgPath))
        .on("close", () => {
          api.sendMessage({
            body: `Ye lo juice apka ly! 🧃`,
            attachment: fs.createReadStream(imgPath)
          }, event.threadID, () => {
            try { fs.unlinkSync(imgPath); } catch (e) {}
          });
        })
        .on("error", () => {
          send.reply('❌ Image نہیں بھیج سکا');
        });
    } catch (error) {
      return send.reply('❌ خرابی: ' + error.message);
    }
  }
};

