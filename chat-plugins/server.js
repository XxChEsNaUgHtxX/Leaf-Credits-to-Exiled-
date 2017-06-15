'use strict';

exports.commands = {
	regras: function (target, room, user) {
		this.popupReply("|html|" + "<font size=4><b>Regras do Leaf:</b></font><br />" +
					"<br />" +
					"<b>1.</b> Sem sexo. Não descute nada sexual explicito. Temos crianças no servidor.<br />" +
					"<br />" +
					"<b>2.</b> Os staffers têm autorização para punir qualquer comportamento que considerem inapropriado, que esteja ou não nesta lista.<br />" +
					"<br />" +
					"<b>3.</b> Não faça Spam, o Leaf tem um sistema automático de Spam de outros servidores psim, quem vai sair perdendo com o Spam será <b>VOCÊ</b>. Não flode mais de 4 linhas no Lobby ou em qualquer sala.<br />" +
					"<br />" +
					"<b>4.</b> Sem minimod: não modere se não é seu trabalho. Não diga as pessoas que elas serão mutadas, não peça que pessoas sejam silenciadas. Isso pode causar BAN, Lock entre outras coisas como silenciado por 24 horas.<br />" +
					"<br />" +
					"<b>5.</b> Spam não é perimitido isso inclue a links de outros servidores e a link de sites pornos.<br />" +
					"<br />" +
					"<b>6.</b> Os nomes de usuários não podem referenciar aos staffers ou ser referente diretamente a atividade sexual, ou ser excessivamente nojento.<br />" +
					"<br />" +
					"<b>7.</b> Por favor, trate todos com respeito incluindo os Staffers que apenas querem ajudar.<br />" +
					"<br />" +
					"<b>8.</b> Não flode chats com shitposting, como falar coisas sem sentido do nada e etc.<br />" +
					"<br />" +
"<b>9.</b> N�o Divulgue O Servidor Para Estranhos Sem Permiss�o,Ao Contrariar Essa Regra Ser�s Sujeito � Punimentos.<br />" +
					"<br />" +

					"<i>Por favor siga essas regras para tornar o Leaf um lugar feliz, amigável, e sociável de se estar.<b>Credits:SnakeRL</b></i><br />");
	},
	
	fleur : 'fleur',
    	fleur: function(target, room, user) {
            if (!this.runBroadcast()) return;
            this.sendReplyBox('<center><tbody><table height="100%" width="100%" padding:5px; style="background-image: url(&quot;http://i.imgur.com/fpc8bl1.jpg&quot;); background-size: cover" table border="0"><tbody><tr><td width="25%" height="100%"><center><img height="180" src="https://s29.postimg.org/u6brormg7/yozora_g1.gif">' +
                '<a href="http://picosong.com/rbeq/" target="_blank"><img src="https://s27.postimg.org/nd0zdnvur/fleur_text.png" height="125" alt="Theme" /></a>' +
                '<img src="https://s29.postimg.org/9ngvjp8iv/yozora_g2.gif" height="180"><br />' +
                '<b>Catchphrase: </b>"What kind of style do you desire to change into? Mesmerize your identity with fashion and make up. Blossom into an elegant flower, so that you may live your life with freedom and happiness."</center>');
    	},
};
