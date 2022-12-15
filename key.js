			// Yazdırma görünümü
			
			function yazdir () {

				document.getElementById('tahta').style.height = '100vh';
				document.getElementById('klavye').style.display = 'none';
				document.getElementById('foo').style.display = 'none';
				document.getElementById('buu').style.display = 'none';
				
			}


			function odakla () {

			var odak = document.getElementById('p').focus();

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
				odakla();
			});
			document.querySelector(".uc").addEventListener('click', function(){
				var uc = "۳";
				document.getElementById('p').value += uc; 
				odakla();
			});
			document.querySelector(".dort").addEventListener('click', function(){
				var dort = "٤";
				document.getElementById('p').value += dort; 
				odakla();
			});
			document.querySelector(".bes").addEventListener('click', function(){
				var bes = "٥";
				document.getElementById('p').value += bes; 
				odakla();
			});
			document.querySelector(".alti").addEventListener('click', function(){
				var alti = "٦";
				document.getElementById('p').value += alti; 
				odakla();
			});
			document.querySelector(".yedi").addEventListener('click', function(){
				var yedi = "۷";
				document.getElementById('p').value += yedi; 
				odakla();
			});
			document.querySelector(".sekiz").addEventListener('click', function(){
				var sekiz = "۸";
				document.getElementById('p').value += sekiz; 
				odakla();
			});
			document.querySelector(".dokuz").addEventListener('click', function(){
				var dokuz = "۹";
				document.getElementById('p').value += dokuz; 
				odakla();
			});
			document.querySelector(".sifir").addEventListener('click', function(){
				var sifir = "۰";
				document.getElementById('p').value += sifir; 
				odakla();
			});

			// Matematiksel işlemler
			document.querySelector(".bolu").addEventListener('click', function(){
				var bolu = "/";
				document.getElementById('p').value += bolu; 
				odakla();
			});
			document.querySelector(".arti").addEventListener('click', function(){
				var arti = "+";
				document.getElementById('p').value += arti; 
				odakla();
			});
			document.querySelector(".eksi").addEventListener('click', function(){
				var eksi = "-";
				document.getElementById('p').value += eksi; 
				odakla();
			});
			document.querySelector(".esittir").addEventListener('click', function(){
				var esittir = "=";
				document.getElementById('p').value += esittir; 
				odakla();
			});

			// Harfler 1. Sıra
			document.querySelector(".da").addEventListener('click', function(){
				var da = "ض";
				document.getElementById('p').value += da; 
				odakla();
			});
			document.querySelector(".sa").addEventListener('click', function(){
				var sa = "ص";
				document.getElementById('p').value += sa; 
				odakla();
			});
			document.querySelector(".se").addEventListener('click', function(){
				var se = "ث";
				document.getElementById('p').value += se; 
				odakla();
			});
			document.querySelector(".q").addEventListener('click', function(){
				var q = "ق";
				document.getElementById('p').value += q; 
				odakla();
			});
			document.querySelector(".f").addEventListener('click', function(){
				var f = "ف";
				document.getElementById('p').value += f; 
				odakla();
			});
			document.querySelector(".ga").addEventListener('click', function(){
				var ga = "غ";
				document.getElementById('p').value += ga; 
				odakla();
			});
			document.querySelector(".aa").addEventListener('click', function(){
				var aa = "ع";
				document.getElementById('p').value += aa; 
				odakla();
			});
			document.querySelector(".h").addEventListener('click', function(){
				var h = "ه";
				document.getElementById('p').value += h; 
				odakla();
			});
			document.querySelector(".hi").addEventListener('click', function(){
				var hi = "خ";
				document.getElementById('p').value += hi; 
				odakla();
			});
			document.querySelector(".ha").addEventListener('click', function(){
				var ha = "ح";
				document.getElementById('p').value += ha; 
				odakla();
			});
			document.querySelector(".c").addEventListener('click', function(){
				var c = "ج";
				document.getElementById('p').value += c; 
				odakla();
			});
			document.querySelector(".ch").addEventListener('click', function(){
				var ch = "چ";
				document.getElementById('p').value += ch;
				odakla();
			});


			// Harfler 2. Sıra
			document.querySelector(".sh").addEventListener('click', function(){
				var sh = "ش";
				document.getElementById('p').value += sh;
				odakla();
			});
			document.querySelector(".sin").addEventListener('click', function(){
				var sin = "س";
				document.getElementById('p').value += sin;
				odakla();
			});
			document.querySelector(".y").addEventListener('click', function(){
				var y = "ی";
				document.getElementById('p').value += y;
				odakla();
			});
			document.querySelector(".b").addEventListener('click', function(){
				var b = "ب";
				document.getElementById('p').value += b;
				odakla();
			});
			document.querySelector(".l").addEventListener('click', function(){
				var l = "ل";
				document.getElementById('p').value += l;
				odakla();
			});
			document.querySelector(".a").addEventListener('click', function(){
				var a = "ا";
				document.getElementById('p').value += a;
				odakla();
			});
			document.querySelector(".t").addEventListener('click', function(){
				var t = "ت";
				document.getElementById('p').value += t;
				odakla();
			});
			document.querySelector(".n").addEventListener('click', function(){
				var n = "ن";
				document.getElementById('p').value += n;
				odakla();
			});
			document.querySelector(".m").addEventListener('click', function(){
				var m = "م";
				document.getElementById('p').value += m;
				odakla();
			});
			document.querySelector(".k").addEventListener('click', function(){
				var k = "ك";
				document.getElementById('p').value += k;
				odakla();
			});
			document.querySelector(".ge").addEventListener('click', function(){
				var ge = "گ";
				document.getElementById('p').value += ge;
				odakla();
			});
			document.querySelector(".nef").addEventListener('click', function(){
				var nef = "ڭ";
				document.getElementById('p').value += nef;
				odakla();
			});

			// Harfler 3. Sıra
			document.querySelector(".zi").addEventListener('click', function(){
				var zi = "ظ";
				document.getElementById('p').value += zi;
				odakla();
			});
			document.querySelector(".ti").addEventListener('click', function(){
				var ti = "ط";
				document.getElementById('p').value += ti;
				odakla();
			});
			document.querySelector(".z").addEventListener('click', function(){
				var z = "ز";
				document.getElementById('p').value += z;
				odakla();
			});
			document.querySelector(".r").addEventListener('click', function(){
				var r = "ر";
				document.getElementById('p').value += r;
				odakla();
			});
			document.querySelector(".zel").addEventListener('click', function(){
				var zel = "ذ";
				document.getElementById('p').value += zel;
				odakla();
			});
			document.querySelector(".d").addEventListener('click', function(){
				var d = "د";
				document.getElementById('p').value += d;
				odakla();
			});
			document.querySelector(".p").addEventListener('click', function(){
				var p = "پ";
				document.getElementById('p').value += p;
				odakla();
			});
			document.querySelector(".v").addEventListener('click', function(){
				var v = "و";
				document.getElementById('p').value += v;
				odakla();
			});
			document.querySelector(".j").addEventListener('click', function(){
				var j = "ژ";
				document.getElementById('p').value += j;
				odakla();
			});
			document.querySelector(".ty").addEventListener('click', function(){
				var ty = "ة";
				document.getElementById('p').value += ty;
				odakla();
			});
			document.querySelector(".yh").addEventListener('click', function(){
				var yh = "ئ";
				document.getElementById('p').value += yh;
				odakla();
			});
			document.querySelector(".vh").addEventListener('click', function(){
				var vh = "ؤ";
				document.getElementById('p').value += vh;
				odakla();
			});
			document.querySelector(".hmh").addEventListener('click', function(){
				var hmh = "ۀ";
				document.getElementById('p').value += hmh;
				odakla();
			});
			document.querySelector(".hem").addEventListener('click', function(){
				var hem = "ء";
				document.getElementById('p').value += hem;
				odakla();
			});
			document.querySelector(".hmel").addEventListener('click', function(){
				var hmel = "أ";
				document.getElementById('p').value += hmel;
				odakla();
			});
			document.querySelector(".med").addEventListener('click', function(){
				var med = "آ";
				document.getElementById('p').value += med;
				odakla();
			});

			// İşaretler Sırası
			document.querySelector(".tra").addEventListener('click', function(){
				var tra = ")";
				document.getElementById('p').value += tra;
				odakla();
			});
			document.querySelector(".trk").addEventListener('click', function(){
				var trk = "(";
				document.getElementById('p').value += trk;
				odakla();
			});
			document.querySelector(".uz").addEventListener('click', function(){
				var uz = "ـ";
				document.getElementById('p').value += uz;
				odakla();
			});
			document.querySelector(".sor").addEventListener('click', function(){
				var sor = "؟";
				document.getElementById('p').value += sor;
				odakla();
			});
			document.querySelector(".un").addEventListener('click', function(){
				var un = "!";
				document.getElementById('p').value += un;
				odakla();
			});
			document.querySelector(".ikn").addEventListener('click', function(){
				var ikn = ":";
				document.getElementById('p').value += ikn;
				odakla();
			});
			document.querySelector(".nvir").addEventListener('click', function(){
				var nvir = "؛";
				document.getElementById('p').value += nvir;
				odakla();
			});
			document.querySelector(".vir").addEventListener('click', function(){
				var vir = "،";
				document.getElementById('p').value += vir;
				odakla();
			});
			document.querySelector(".nok").addEventListener('click', function(){
				var nok = ".";
				document.getElementById('p').value += nok;
				odakla();
			});


			// Harekeler vd. Sıra
			document.querySelector(".suslu").addEventListener('click', function(){
				var suslu = "❊";
				document.getElementById('p').value += suslu;
				odakla();
			});
			document.querySelector(".lel").addEventListener('click', function(){
				var lel = "ﻻ";
				document.getElementById('p').value += lel;
				odakla();
			});
			document.querySelector(".ele").addEventListener('click', function(){
				var ele = "إ";
				document.getElementById('p').value += ele;
				odakla();
			});
			document.querySelector(".ustun").addEventListener('click', function(){
				var ustun = "َ";
				document.getElementById('p').value += ustun;
				odakla();
			});
			document.querySelector(".esre").addEventListener('click', function(){
				var esre = "ِ";
				document.getElementById('p').value += esre;
				odakla();
			});
			document.querySelector(".otre").addEventListener('click', function(){
				var otre = "ُ";
				document.getElementById('p').value += otre;
				odakla();
			});
			document.querySelector(".cezm").addEventListener('click', function(){
				var cezm = "ْ";
				document.getElementById('p').value += cezm;
				odakla();
			});
			document.querySelector(".sedde").addEventListener('click', function(){
				var sedde = "ّ";
				document.getElementById('p').value += sedde;
				odakla();
			});
			document.querySelector(".ikiustun").addEventListener('click', function(){
				var ikiustun = "ً";
				document.getElementById('p').value += ikiustun;
				odakla();
			});
			document.querySelector(".ikiesre").addEventListener('click', function(){
				var ikiesre = "ٍ";
				document.getElementById('p').value += ikiesre;
				odakla();
			});
			document.querySelector(".ikiotre").addEventListener('click', function(){
				var ikiotre = "ٌ";
				document.getElementById('p').value += ikiotre;
				odakla();
			});
			document.querySelector(".ceker").addEventListener('click', function(){
				var ceker = "ٰ";
				document.getElementById('p').value += ceker;
				odakla();
			});
			document.querySelector(".aceker").addEventListener('click', function(){
				var aceker = "ٖ";
				document.getElementById('p').value += aceker;
				odakla();
			});
			document.querySelector(".medd").addEventListener('click', function(){
				var medd = "ٓ";
				document.getElementById('p').value += medd;
				odakla();
			});

			// Özel. Sıra
			document.querySelector(".besmele").addEventListener('click', function(){
				var besmele = "بِسْــــــــمِ اللّٰهِ الرَّحْمٰنِ الرَّحٖیمِ";
				document.getElementById('p').value += besmele;
				odakla();
			});
			document.querySelector(".entr").addEventListener('click', function(){
				var entr = '\n';
				document.getElementById('p').value += entr;
				odakla();
			});
			document.querySelector(".bosluk").addEventListener('click', function(){
				var bosluk = " ";
				document.getElementById('p').value += bosluk;
				odakla();
			});

			document.querySelector(".tab").addEventListener('click', function(){
				var tab = "    ";
				document.getElementById('p').value += tab;
				odakla();
			});

			document.querySelector(".sil").addEventListener('click', function(){
				var deger = document.getElementById('p').value;
				let sil = deger.slice(0,(deger.length-1));
				 document.getElementById('p').value = sil;
				 odakla();
			});
			document.querySelector(".temizle").addEventListener('click', function(){
				let tahta = document.querySelector("#p");
				document.getElementById('p').value = "";
				odakla();
			});

