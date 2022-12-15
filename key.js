			// Yazdırma görünümü
			
			function yazdir () {

				document.getElementById('tahta').style.height = '100vh';
				document.getElementById('klavye').style.display = 'none';
				document.getElementById('foo').style.display = 'none';
				document.getElementById('buu').style.display = 'none';
				
			}
						
			

			function odakla () {

			var odak = document.getElementById('p');

			odak.addEventListener('focus', function(v) {

				v.preventDefault();

			});
			}
							
			
			// Rakamlar
			document.querySelector(".bir").addEventListener('click', function(){
				var bir = "۱";
				document.getElementById('p').value += bir;
				odakla();
			});
			document.querySelector(".iki").addEventListener('click', function(){
				var iki = "۲";
				document.getElementById('p').value += iki;
				document.getElementById('p').focus();
			});
			document.querySelector(".uc").addEventListener('click', function(){
				var uc = "۳";
				document.getElementById('p').value += uc;
				document.getElementById('p').focus();
			});
			document.querySelector(".dort").addEventListener('click', function(){
				var dort = "٤";
				document.getElementById('p').value += dort;
				document.getElementById('p').focus();
			});
			document.querySelector(".bes").addEventListener('click', function(){
				var bes = "٥";
				document.getElementById('p').value += bes;
				document.getElementById('p').focus();
			});
			document.querySelector(".alti").addEventListener('click', function(){
				var alti = "٦";
				document.getElementById('p').value += alti;
				document.getElementById('p').focus();
			});
			document.querySelector(".yedi").addEventListener('click', function(){
				var yedi = "۷";
				document.getElementById('p').value += yedi;
				document.getElementById('p').focus();
			});
			document.querySelector(".sekiz").addEventListener('click', function(){
				var sekiz = "۸";
				document.getElementById('p').value += sekiz;
				document.getElementById('p').focus();
			});
			document.querySelector(".dokuz").addEventListener('click', function(){
				var dokuz = "۹";
				document.getElementById('p').value += dokuz;
				document.getElementById('p').focus();
			});
			document.querySelector(".sifir").addEventListener('click', function(){
				var sifir = "۰";
				document.getElementById('p').value += sifir;
				document.getElementById('p').focus();
			});

			// Matematiksel işlemler
			document.querySelector(".bolu").addEventListener('click', function(){
				var bolu = "/";
				document.getElementById('p').value += bolu;
				document.getElementById('p').focus();
			});
			document.querySelector(".arti").addEventListener('click', function(){
				var arti = "+";
				document.getElementById('p').value += arti;
				document.getElementById('p').focus();
			});
			document.querySelector(".eksi").addEventListener('click', function(){
				var eksi = "-";
				document.getElementById('p').value += eksi;
				document.getElementById('p').focus();
			});
			document.querySelector(".esittir").addEventListener('click', function(){
				var esittir = "=";
				document.getElementById('p').value += esittir;
				document.getElementById('p').focus();
			});

			// Harfler 1. Sıra
			document.querySelector(".da").addEventListener('click', function(){
				var da = "ض";
				document.getElementById('p').value += da;
				document.getElementById('p').focus();
			});
			document.querySelector(".sa").addEventListener('click', function(){
				var sa = "ص";
				document.getElementById('p').value += sa;
				document.getElementById('p').focus();
			});
			document.querySelector(".se").addEventListener('click', function(){
				var se = "ث";
				document.getElementById('p').value += se;
				document.getElementById('p').focus();
			});
			document.querySelector(".q").addEventListener('click', function(){
				var q = "ق";
				document.getElementById('p').value += q;
				document.getElementById('p').focus();
			});
			document.querySelector(".f").addEventListener('click', function(){
				var f = "ف";
				document.getElementById('p').value += f;
				document.getElementById('p').focus();
			});
			document.querySelector(".ga").addEventListener('click', function(){
				var ga = "غ";
				document.getElementById('p').value += ga;
				document.getElementById('p').focus();
			});
			document.querySelector(".aa").addEventListener('click', function(){
				var aa = "ع";
				document.getElementById('p').value += aa;
				document.getElementById('p').focus();
			});
			document.querySelector(".h").addEventListener('click', function(){
				var h = "ه";
				document.getElementById('p').value += h;
				document.getElementById('p').focus();
			});
			document.querySelector(".hi").addEventListener('click', function(){
				var hi = "خ";
				document.getElementById('p').value += hi;
				document.getElementById('p').focus();
			});
			document.querySelector(".ha").addEventListener('click', function(){
				var ha = "ح";
				document.getElementById('p').value += ha;
				document.getElementById('p').focus();
			});
			document.querySelector(".c").addEventListener('click', function(){
				var c = "ج";
				document.getElementById('p').value += c;
				document.getElementById('p').focus();
			});
			document.querySelector(".ch").addEventListener('click', function(){
				var ch = "چ";
				document.getElementById('p').value += ch;
				document.getElementById('p').focus();
			});


			// Harfler 2. Sıra
			document.querySelector(".sh").addEventListener('click', function(){
				var sh = "ش";
				document.getElementById('p').value += sh;
				document.getElementById('p').focus();
			});
			document.querySelector(".sin").addEventListener('click', function(){
				var sin = "س";
				document.getElementById('p').value += sin;
				document.getElementById('p').focus();
			});
			document.querySelector(".y").addEventListener('click', function(){
				var y = "ی";
				document.getElementById('p').value += y;
				document.getElementById('p').focus();
			});
			document.querySelector(".b").addEventListener('click', function(){
				var b = "ب";
				document.getElementById('p').value += b;
				document.getElementById('p').focus();
			});
			document.querySelector(".l").addEventListener('click', function(){
				var l = "ل";
				document.getElementById('p').value += l;
				document.getElementById('p').focus();
			});
			document.querySelector(".a").addEventListener('click', function(){
				var a = "ا";
				document.getElementById('p').value += a;
				document.getElementById('p').focus();
				var a = "ا";
			});
			document.querySelector(".t").addEventListener('click', function(){
				var t = "ت";
				document.getElementById('p').value += t;
				document.getElementById('p').focus();
			});
			document.querySelector(".n").addEventListener('click', function(){
				var n = "ن";
				document.getElementById('p').value += n;
				document.getElementById('p').focus();
			});
			document.querySelector(".m").addEventListener('click', function(){
				var m = "م";
				document.getElementById('p').value += m;
				document.getElementById('p').focus();
			});
			document.querySelector(".k").addEventListener('click', function(){
				var k = "ك";
				document.getElementById('p').value += k;
				document.getElementById('p').focus();
			});
			document.querySelector(".ge").addEventListener('click', function(){
				var ge = "گ";
				document.getElementById('p').value += ge;
				document.getElementById('p').focus();
			});
			document.querySelector(".nef").addEventListener('click', function(){
				var nef = "ڭ";
				document.getElementById('p').value += nef;
				document.getElementById('p').focus();
			});

			// Harfler 3. Sıra
			document.querySelector(".zi").addEventListener('click', function(){
				var zi = "ظ";
				document.getElementById('p').value += zi;
				document.getElementById('p').focus();
			});
			document.querySelector(".ti").addEventListener('click', function(){
				var ti = "ط";
				document.getElementById('p').value += ti;
				document.getElementById('p').focus();
			});
			document.querySelector(".z").addEventListener('click', function(){
				var z = "ز";
				document.getElementById('p').value += z;
				document.getElementById('p').focus();
			});
			document.querySelector(".r").addEventListener('click', function(){
				var r = "ر";
				document.getElementById('p').value += r;
				document.getElementById('p').focus();
			});
			document.querySelector(".zel").addEventListener('click', function(){
				var zel = "ذ";
				document.getElementById('p').value += zel;
				document.getElementById('p').focus();
			});
			document.querySelector(".d").addEventListener('click', function(){
				var d = "د";
				document.getElementById('p').value += d;
				document.getElementById('p').focus();
			});
			document.querySelector(".p").addEventListener('click', function(){
				var p = "پ";
				document.getElementById('p').value += p;
				document.getElementById('p').focus();
			});
			document.querySelector(".v").addEventListener('click', function(){
				var v = "و";
				document.getElementById('p').value += v;
				document.getElementById('p').focus();
			});
			document.querySelector(".j").addEventListener('click', function(){
				var j = "ژ";
				document.getElementById('p').value += j;
				document.getElementById('p').focus();
			});
			document.querySelector(".ty").addEventListener('click', function(){
				var ty = "ة";
				document.getElementById('p').value += ty;
				document.getElementById('p').focus();
			});
			document.querySelector(".yh").addEventListener('click', function(){
				var yh = "ئ";
				document.getElementById('p').value += yh;
				document.getElementById('p').focus();
			});
			document.querySelector(".vh").addEventListener('click', function(){
				var vh = "ؤ";
				document.getElementById('p').value += vh;
				document.getElementById('p').focus();
			});
			document.querySelector(".hmh").addEventListener('click', function(){
				var hmh = "ۀ";
				document.getElementById('p').value += hmh;
				document.getElementById('p').focus();
			});
			document.querySelector(".hem").addEventListener('click', function(){
				var hem = "ء";
				document.getElementById('p').value += hem;
				document.getElementById('p').focus();
			});
			document.querySelector(".hmel").addEventListener('click', function(){
				var hmel = "أ";
				document.getElementById('p').value += hmel;
				document.getElementById('p').focus();
			});
			document.querySelector(".med").addEventListener('click', function(){
				var med = "آ";
				document.getElementById('p').value += med;
				document.getElementById('p').focus();
			});

			// İşaretler Sırası
			document.querySelector(".tra").addEventListener('click', function(){
				var tra = ")";
				document.getElementById('p').value += tra;
				document.getElementById('p').focus();
			});
			document.querySelector(".trk").addEventListener('click', function(){
				var trk = "(";
				document.getElementById('p').value += trk;
				document.getElementById('p').focus();
			});
			document.querySelector(".uz").addEventListener('click', function(){
				var uz = "ـ";
				document.getElementById('p').value += uz;
				document.getElementById('p').focus();
			});
			document.querySelector(".sor").addEventListener('click', function(){
				var sor = "؟";
				document.getElementById('p').value += sor;
				document.getElementById('p').focus();
			});
			document.querySelector(".un").addEventListener('click', function(){
				var un = "!";
				document.getElementById('p').value += un;
				document.getElementById('p').focus();
			});
			document.querySelector(".ikn").addEventListener('click', function(){
				var ikn = ":";
				document.getElementById('p').value += ikn;
				document.getElementById('p').focus();
			});
			document.querySelector(".nvir").addEventListener('click', function(){
				var nvir = "؛";
				document.getElementById('p').value += nvir;
				document.getElementById('p').focus();
			});
			document.querySelector(".vir").addEventListener('click', function(){
				var vir = "،";
				document.getElementById('p').value += vir;
				document.getElementById('p').focus();
			});
			document.querySelector(".nok").addEventListener('click', function(){
				var nok = ".";
				document.getElementById('p').value += nok;
				document.getElementById('p').focus();
			});


			// Harekeler vd. Sıra
			document.querySelector(".suslu").addEventListener('click', function(){
				var suslu = "❊";
				document.getElementById('p').value += suslu;
				document.getElementById('p').focus();
			});
			document.querySelector(".lel").addEventListener('click', function(){
				var lel = "ﻻ";
				document.getElementById('p').value += lel;
				document.getElementById('p').focus();
			});
			document.querySelector(".ele").addEventListener('click', function(){
				var ele = "إ";
				document.getElementById('p').value += ele;
				document.getElementById('p').focus();
			});
			document.querySelector(".ustun").addEventListener('click', function(){
				var ustun = "َ";
				document.getElementById('p').value += ustun;
				document.getElementById('p').focus();
			});
			document.querySelector(".esre").addEventListener('click', function(){
				var esre = "ِ";
				document.getElementById('p').value += esre;
				document.getElementById('p').focus();
			});
			document.querySelector(".otre").addEventListener('click', function(){
				var otre = "ُ";
				document.getElementById('p').value += otre;
				document.getElementById('p').focus();
			});
			document.querySelector(".cezm").addEventListener('click', function(){
				var cezm = "ْ";
				document.getElementById('p').value += cezm;
				document.getElementById('p').focus();
			});
			document.querySelector(".sedde").addEventListener('click', function(){
				var sedde = "ّ";
				document.getElementById('p').value += sedde;
				document.getElementById('p').focus();
			});
			document.querySelector(".ikiustun").addEventListener('click', function(){
				var ikiustun = "ً";
				document.getElementById('p').value += ikiustun;
				document.getElementById('p').focus();
			});
			document.querySelector(".ikiesre").addEventListener('click', function(){
				var ikiesre = "ٍ";
				document.getElementById('p').value += ikiesre;
				document.getElementById('p').focus();
			});
			document.querySelector(".ikiotre").addEventListener('click', function(){
				var ikiotre = "ٌ";
				document.getElementById('p').value += ikiotre;
				document.getElementById('p').focus();
			});
			document.querySelector(".ceker").addEventListener('click', function(){
				var ceker = "ٰ";
				document.getElementById('p').value += ceker;
				document.getElementById('p').focus();
			});
			document.querySelector(".aceker").addEventListener('click', function(){
				var aceker = "ٖ";
				document.getElementById('p').value += aceker;
				document.getElementById('p').focus();
			});
			document.querySelector(".medd").addEventListener('click', function(){
				var medd = "ٓ";
				document.getElementById('p').value += medd;
				document.getElementById('p').focus();
			});

			// Özel. Sıra
			document.querySelector(".besmele").addEventListener('click', function(){
				var besmele = "بِسْــــــــمِ اللّٰهِ الرَّحْمٰنِ الرَّحٖیمِ";
				document.getElementById('p').value += besmele;
				document.getElementById('p').focus();
			});
			document.querySelector(".entr").addEventListener('click', function(){
				var entr = '\n';
				document.getElementById('p').value += entr;
				document.getElementById('p').focus();
			});
			document.querySelector(".bosluk").addEventListener('click', function(){
				var bosluk = " ";
				document.getElementById('p').value += bosluk;
				document.getElementById('p').focus();
			});

			document.querySelector(".tab").addEventListener('click', function(){
				var tab = "    ";
				document.getElementById('p').value += tab;
				document.getElementById('p').focus();
			});

			document.querySelector(".sil").addEventListener('click', function(){
				var deger = document.getElementById('p').value;
				let sil = deger.slice(0,(deger.length-1));
				 document.getElementById('p').value = sil;
 				document.getElementById('p').focus();
			});
			document.querySelector(".temizle").addEventListener('click', function(){
				let tahta = document.querySelector("#p");
				document.getElementById('p').value = "";
				document.getElementById('p').focus();
			});







//
// const form = document.getElementById('p');
//
// form.addEventListener('focusin', (event) => {
//   event.target.style.background = 'yellow';
// });
//
// form.addEventListener('focusout', (event) => {
//   event.target.style.background = '';
// });
