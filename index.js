
//Array of cards
const cardName = ['The Fool',	'The Magician',	'The High Priestess',	'The Empress',	'The Emperor',	'The Hierophant',	'The Lovers',	'The Chariot',	'Strength',	'The Hermit',	'Wheel of Fortune',	'Justice',	'The Hanged Man',	'Death',	'Temperance',	'The Devil',	'The Tower',	'The Star',	'The Moon',	'The Sun',	'Judgement',	'The World',	'Ace of Wands',	'Two of Wands',	'Three of Wands',	'Four of Wands',	'Five of Wands',	'Six of Wands',	'Seven of Wands',	'Eight of Wands',	'Nine of Wands',	'Ten of Wands',	'Page of Wands',	'Knight of Wands',	'Queen of Wands',	'King of Wands',	'Ace of Cups',	'Two of Cups',	'Three of Cups',	'Four of Cups',	'Five of Cups',	'Six of Cups',	'Seven of Cups',	'Eight of Cups',	'Nine of Cups',	'Ten of Cups',	'Page of Cups',	'Knight of Cups',	'Queen of Cups',	'King of Cups',	'Ace of Swords',	'Two of Swords',	'Three of Swords',	'Four of Swords',	'Five of Swords',	'Six of Swords',	'Seven of Swords',	'Eight of Swords',	'Nine of Swords',	'Ten of Swords',	'Page of Swords',	'Knight of Swords',	'Queen of Swords',	'King of Swords',	'Ace of Pentacles',	'Two of Pentacles',	'Three of Pentacles',	'Four of Pentacles',	'Five of Pentacles',	'Six of Pentacles',	'Seven of Pentacles',	'Eight of Pentacles',	'Nine of Pentacles',	'Ten of Pentacles',	'Page of Pentacles',	'Knight of Pentacles',	'Queen of Pentacles',	'King of Pentacles',
];
 //Descriptions and Images:
   const foolDetail = 'The Fool card is numbered 0, which is considered to be a number of infinite potential. Consider him a blank slate, for The Fool has yet to develop a clear personality. He is the symbol of innocence - his journey to come will shape his character yet. <br><br>To see the The Fool generally means a beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed. He leads a simple life, having no worries, and does not seem troubled by the fact that he cannot tell what he will encounter ahead.';

   const foolImage = "resources/media/RWS_Tarot_00_Fool.jpg";
  
  const magicianDetail = 'The Magician is the representation of pure willpower. With the power of the elements and the suits, he takes the potential innate in the fool and molds it into being with the power of desire. He is the connecting force between heaven and earth, for he understands the meaning behind the words ~as above so below~ that mind and world are only reflections of one another. Remember that you are powerful, create your inner world, and the outer will follow. <br><br>When you get the Magician in your reading, it might mean that it is time to tap into your full potential without hesitation. It might be in your new job, new business venture, a new love or something else. It shows that the time to take action is now and any signs of holding back would mean missing the opportunity of becoming the best version of yourself. Certain choices will have to be made and these can bring great changes to come. Harness some of the Magicians power to make the world that you desire most.';

  const magicianImage = "resources/media/RWS_Tarot_01_Magician.jpg";

  const highPriestessDetail = 'The meaning of the High Priestess is related with inner knowledge. Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. When the High Priestess shows up it can depict an archetype known as the divine feminine - the mysterious female that understands and holds the answers to the deep unknowns; religion, self, nature. She represents someone that is intuitive, and beginning to open to her or his spirituality. Meditation, prayer and new spiritual work is indicated. <br><br>The card itself shows a night-time scene, meaning that the world in which she protects and guards is one that may at first seem frightening, but has the potential to lead us into the growth of the self. When she appears in a reading, she is calling to you to listen to her message, and follow her into your own depths. There is searching within yourself to be done for the answers that you seek. The answers to the questions you have are within, not without.';

  const highPriestessImage = "resources/media/RWS_Tarot_02_High_Priestess.jpg";

  const empressDetail = 'The Empress shows us how deeply we are embedded to our femininity. Femininity could be associated with fertility, expression, creativity and nurturing among many other aspects. It therefore calls you to connect with beauty and bring happiness to your life. Understand yourself and get in touch with your sensuality so that you can attract life circumstances to bring happiness and joy. She is a signal that be kind to yourself, to take care of yourself. <br><br>The Empress is also a strong indication of pregnancy and motherhood. You can look for other cards to confirm if this is truly pregnancy, or rather just an indication of a motherly, nurturing and caring attitude. <br><br>The Empress card could also mean the birth of a new idea, business or project on your life. Owing to the good fortune that surrounds this card, you can be sure that such situations and projects would end successfully in your life. Discover and bring forth those ideas that have been clinging to you and make sure that you devote yourself towards accomplishing them. This card is a sign that they are going to be successful, and well taken care of. The Empress, as the archetype of the mother earth, also encourages you to spend time interacting with nature, the mother of all of us.';

  const empressImage = "resources/media/RWS_Tarot_03_Empress.jpg";

  const emperorDetail = "It is all about control when it comes to the Emperor, for this card means authority, regulation, organization and a fatherliness. The Emperor represents a strategic thinker who sets out plans that he must see through. He is a symbol of the masculine principle - the paternal figure in life that gives structure, creates rules and systems, and imparts knowledge. Where the Empress's desire for their kingdom is to create happiness, the emperor desires to foster honor and discipline. He guides with a firm hand, following the calling of the crown above all else. <br><br>Though he is a ruler, he understands that to reign is also to serve - thus he acts rationally and according to what is for the greater good of the kingdom. When you see him in a reading, a possible interpretation is that you could be put in charge of something important. It could be a position at work or in any kind of organization or institution that desperately needs order and a clear decisive mind. You may be called to act in the place of the Emperor, using his wisdom to bring clarity to the project.";

  const emperorImage = "resources/media/RWS_Tarot_04_Emperor.jpg";

  const hierophantDetail = "To see the Hierophant in a reading is to embrace the conventional, for it suggests that you have a certain desire to actually follow a process which has been well established. It also suggests that you want to stay within certain conventional bounds of what could be considered an orthodox approach. So, instead of being innovative, you will be adapting to certain beliefs and systems which are already put in place and are existing. <br><br>The Hierophant card suggests that it is better for you to follow social structures which are established and have their own traditions. You might be involved in certain ceremonies, rituals or other religious trappings, for instance. When it comes to tarot readings, this particular card is most commonly representative of institutions as well as their core values. This is a sign that shows that you need to conform to the already existing set of rules and situations which are fixed already.";

  const hierophantImage = "resources/media/RWS_Tarot_05_Hierophant.jpg";

  const loversDetail = "The primary meaning within the Lovers is harmony, attractiveness, and perfection in a relationship. The trust and the unity that the lovers have gives each of them confidence and strength, empowering the other. The bond that they have created is very strong, and it can indicate that the two are joined in marriage, and other close and intimate relationships. A more personal Lovers meaning that can apply to individuals is the development of your own personal belief systems, regardless of what are the societal norms. We see this as a development from the Hierophant, who made decrees and passed on his knowledge through a standardized system. This is one of the times when you figure out what you are going to stand for, and what your philosophy in life will truly be. You must start making up your mind about what you find important and unimportant in your life. You should be as true to yourself as you can be, so you will be genuine and authentic to the people who are around you.";

  const loversImage = "resources/media/TheLovers.jpg";

  const chariotDetail = "The Chariot tarot card is all about overcoming challenges and gaining victory through maintaining control of your surroundings. This perfect control and confidence allows the charioteer to emerge victorious in any situation. The use of strength and willpower are critical in ensuring that you overcome the obstacles that lie in your path. The Chariot's message comes to make you stronger as you strive to achieve your goals. The key message that he brings to you is that you must maintain focus, confidence, and determination through a process that will be full of winding turns and detours. <br><br>If you have a plan or a project that you seem not to be sure about, the Chariot shows that you should pursue the plan with a structured and ordered approach. Your boldness will ensure that you achieve all that you should in this goal. In the Chariot's quest for his goal, he may display some behavior that he has never seen within himself before - competition and a desire to succeed has perhaps brought out a more aggressive part of his personality. Aggression is a natural part of human nature, and the Chariot reminds you that it can also be used to help you take charge of your situation, but also must be reined in so that it does not hinder your way forward.";

  const chariotImage = "resources/media/RWS_Tarot_07_Chariot.jpg";

  const strengthDetail = "When you get the Strength card in an upright manner during your tarot reading, then it shows that you have inner strength and fortitude during moments of danger and distress. It shows that you have the ability to remain calm and strong even when your life is going through immense struggle. It also shows that you are a compassionate person and you always have time for other people even if it's at your own expense. Getting the strength card means that you are a very patient individual who is likely to accomplish anything that they put their mind to. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind. This card also indicates this kind of compassion will always be rewarded with having a lot of stability in your life either presently on in the near future.";

  const strengthImage = "resources/media/RWS_Tarot_08_Strength.jpg";

  const hermitDetail = "The Hermit is a seeker for the knowledge that comes from within. A lonely wanderer in the path of the night, he searches for that which can only be gained with long periods of solitude - the inner voice. To hear it, he must disconnect from the crowds whose voices and desires threaten to overcome his own. He walks through the dark night of his unconscious, guided only by the low light of the northern star, with his destination being his home, his self. <br><br>You are currently contemplating that you need to be alone. Never be afraid to take this chance to reflect, as it could help you clear your mind of all the clutter that comes with everyday life. The Hermit may also refer to your effort in taking action that is authentic and aligned with your true self. You are perhaps searching your inner soul for guidance on what is right, and where your next steps are to be. The hermit's appearance in a reading can also denote the appearance of someone who will come to your life that will be your mentor.";

  const hermitImage = "resources/media/RWS_Tarot_09_Hermit.jpg";

  const wheelOfFortuneDetail = "The Wheel of Fortune turns evermore, seemingly to communicate that life is made up of both good and bad times, and that the cycle is one that we cannot control. It is something that is subjected to both kings and workers, and that nobody on earth can avoid what is fated. When you have good moments in your life, make sure that you enjoy to the fullest, for what comes up must always go down. The same is true in reverse - when you are in a bad situation, things will eventually become better again. Greater forces that are outside of human control are at work here. The same forces that govern the changing of the seasons, or the rising and setting of the sun is also the master of luck and the fate of individuals. Where it lands is as random as chance - you may find yourself at either the top or bottom, but remember that no matter what the outcome it may not last for very long, for the wheel always turns.";

  const wheelOfFortuneImage = "resources/media/RWS_Tarot_10_Wheel_of_Fortune.jpg";

  const justiceDetail = "The decisions that you make now have long-term effects in all things, both for yourself and others. There will always come a time where you will be judged. The Justice tarot card appearing in a reading signals that a judgment will be made fairly and accordingly. The decisions that you have made in the past will be carefully weighed with fairness. Your feelings around this card may differ depending on your situation. If you have been wronged, this card's appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning. Her appearance represents a chance for you to change your actions now for a better future. When a tarot card reading shows the figure of justice, it is time to account for your actions.";

  const justiceImage = "resources/media/RWS_Tarot_11_Justice.jpg";

  const hangedManDetail = "The hanged man understands that his position is a sacrifice that he needed to make in order to progress forward - whether as repentance for past wrongdoings, or a calculated step backward to recalculate his path onward. This time he spends here will not be wasted, he does this as part of his progression forward. His upside down state can also symbolize the feeling of those that walk a spiritual path, for they see the world differently. Where there are others that do not understand the need to sacrifice, you see it differently. This is a natural course of action for you as you walk the path alone. <br><br>The Hanged Man card reflects a particular need to suspend certain action. As a result, this might indicate a certain period of indecision. This means that certain actions or decisions which need to be properly implemented are likely to be postponed even if there is an urgency to act at this particular moment. In fact, it would be ultimately the best if you are capable of stalling certain actions in order to ensure that you have more time to reflect on making critical decisions, this will ultimately be the best.";

  const hangedManImage = "resources/media/RWS_Tarot_12_Hanged_Man.jpg";

  const deathDetail = "Death is one of the most feared cards in a Tarot Deck, and it is very misunderstood. Many people avoid mentioning this card because it has that much power. Most times, people take the name of the card literally. However, the real meaning within the Death card is one of the most positive in the whole deck. The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open. The past needs to be placed behind you, so you can focus your energy on what is ahead of you. <br><br>Another meaning is that you are going to go through a major change, transition, or transformation. The old version of you needs to 'die' to allow the new you to be created. This can be a scary time for you because you may be unsure of what will happen in the future. Even if you are scared, you should welcome the change because you are opening the door to new life events.";

  const deathImage = "resources/media/RWS_Tarot_13_Death.jpg";

  const temperanceDetail = "In moments where there is anxiety or great stress, you have been able to remain calm throughout. You are a person who has mastered the art of not letting things get to you, and this allows you to achieve much progress in all areas you seek out to explore. The Temperance tarot card suggests moderation and balance, coupled with a lot of patience. Where this card appears, there is the suggestion that extremity in any situation is to be avoided. <br><br>The Temperance card implies that you have a clear vision and know what you want to achieve. This is an indication of higher learning, which is a critical attribute in the journey of life. It reflects that you have found peace with what you are doing and everything is unfolding as it ought to. The Temperance card, in relation to other people, shows that you are able to adapt and work in harmony with your community, your coworkers and your loved ones. Your calmness in all matters gives them comfort and puts them at ease.";

  const temperanceImage = "resources/media/RWS_Tarot_14_Temperance.jpg";

  const devilDetail = "Getting the devil card in your reading shows that you have feelings of entrapment, emptiness and lack of fulfillment in your life. It might also mean that you are a slave to materialism and opulence and no matter how hard you try, you just can't seem to shake off the feeling of wanting to indulge in luxurious living. You might be aware that this kind of lifestyle is leading you down the rabbit hole, but you have that feeling of not having any form of control over your actions or urges. Addiction to substances or material pleasures can also be the reason for your feelings of powerlessness and entrapment. In situations such as these, you may feel as though you are a slave, unable to control your impulses or willpower to direct yourself towards something other than the satisfaction of these desires.";

  const devilImage = "resources/media/RWS_Tarot_15_Devil.jpg";

  const towerDetail = "The Tower represents change in the most radical and momentous sense. It is for this reason that the card itself visually looks so unnerving. But it doesn't necessarily have to be truly frightening or ominous. Because at the heart of this card, its message is foundational, groundbreaking change. The kind of event that the Tower card marks does not have to be something terrible, like a disaster or a great loss.  Change itself is a normal part of life that one has to embrace. But it can sometimes strike fear, for it means that we must abandon the truths that we have known prior to this event. The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.";

  const towerImage = "resources/media/RWS_Tarot_16_Tower.jpg";

  const starDetail = "The Star brings hope, renewed power, and strength to carry on with life. It shows how abundantly blessed you are by the universe as evidenced by the various things around you. It may not be directly evident at the moment, for this card follows the trauma of the Tower card. Remember that you hold within you all that you need for your fulfillment - the only thing that you need is courage. For this, you have all reasons to rejoice. To see this card is a message to have faith, for the universe will bless you and bring forth all that you need. To receive the Star in your reading means that you have gone and passed through a terrible life challenge. You have managed to go through this without losing your hope. While you suffered, you perhaps were not aware of your own strength, but you are now perhaps recognizing that the loss helped you discover your own resilience and inner power. It is only now that you can really appreciate all that you have.";

  const starImage = "resources/media/RWS_Tarot_17_Star.jpg";

  const moonDetail = "On one hand, the Moon card can symbolize your imagination is taking the best of you. In the dark of the night, you are taking a path that you are unsure of, for there could be danger lurking in its depths. You are the crawfish embarking on the path in the card. The moon's light can bring you clarity and understanding and you should allow your intuition to guide you through this darkness. Another reading of the Moon card is the existence of illusion. Some hidden truth must be discovered, for what you are seeing now may just be a trick of the light. You must search for the hidden forces that must be unraveled.";

  const moonImage = "resources/media/RWS_Tarot_18_Moon.jpg";

  const sunDetail = "The Sun card represents success, abundance, and radiance. Like the sun itself, it gives strength and vitality to all those that are lucky enough to feel its rays. There is much joy and happiness that is coming to you. Because of your own personal fulfillment, you provide others with inspiration and joy as well. People are drawn to you because they are capable of seeing the warm and beautiful energy which you bring into their lives. You are also in a position in which you are capable of sharing your qualities as well as achievements with other people. You radiate love and affection towards those you care about the most.";

  const sunImage = "resources/media/RWS_Tarot_19_Sun.jpg";

  const judgementDetail = "The traditional Judgement meaning focuses on the moment when we reflect and evaluate ourselves and our actions. It is through self-reflection that we can have a clearer and objective understanding about where we are now, and what we need to do in order to grow as humans. The Judgement card appearing in a reading signifies that you are coming close to this significant point in your life where you must start to evaluate yourself. To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection. You now have a clearer idea of what you need to change and how you need to be true yourself and your needs. This can mean making small changes to your daily life or making huge changes that not only affect you but the people close to you.";

  const judgementImage = "resources/media/RWS_Tarot_20_Judgement.jpg";

  const worldDetail = "To encounter the World in your cards is to encounter a great unity and wholeness. It symbolizes the moment when the inner and the outer worlds - self and other - become a single entity. In some traditions, this state is described as enlightenment, or nirvana. There is a recognition that the individual self is profoundly linked with all other things, and that we all dance and sway along the flow of life to one rhythm. Not only do you hear this rhythm, but you participate in it - following the dips and the rises, the joys and the sorrows. The meaning of the World card is fulfillment, achievement, and completion. This shows that all the efforts that you have been putting in place are starting to pay off. It reflects that you have completed a major milestone in your life and you have built the resilience to withstand challenges. The World may indicate completion of a long-term project, study or any other major event in your life. It may also mean the birth of a child, marriage, graduation or any other thing that you have accomplished.";

  const worldImage = "resources/media/RWS_Tarot_21_World.jpg";

  const aceWandsDetail = "Wands symbolize creativity, and the Ace of Wands is the boldest among the cards in the suit. It is not the kind of creativity that you learn from school or as a hobby. It is bravely finding your own voice, it creates a place where you can develop your own vision. In other words, it is associated with willpower, and creativity in the cosmic sense.When you draw the Ace of Wands, it is an indicator that you should just go for it. Take the chance and pursue an idea that you have in mind. Take the first steps to start the creative project. The Ace of Wands calls out to you to follow your instincts. If you think that the project that you've been dreaming of is a good idea, and then just go ahead and do it. ";

  const aceWandsImage = "resources/media/Wands01.jpg";

  const twoWandsDetail = "The Two of Wands is a more mature version of the ace of wands, meaning that that this tarot card is all about planning and moving forward – progression. Look at it this way; you have already set out to achieve a particular task, which means you have turned an idea into a realistic plan. Such a plan will require fulfillment and therefore you have to progress from just having the plan to actually achieving what you set out for. Discovery is being considered as another two of wands meaning. This is because it means that you are stepping out of your cocoon and exploring new experiences and worlds. While the beginning might seem tough and difficult, the Two of Wands card encourages you to strive on and push forward.";

  const twoWandsImage = "resources/media/Wands02.jpg";

  const threeWandsDetail = "'The meaning of the Three of Wands hints that you are planning or going to plan for the future with more conviction. This could mean that everything around your plans is going smoothly, as you have taken the time to plan your future, and are taking steps to turn plans into action. It hints that you are perhaps creating a stable foundation for yourself. The symbolism within the Three of Wands is that opportunities that can take place to widen your horizons in many areas. It also is a warning to keep your mind open as better opportunities could open up to you. As you take steps towards achieving what you set out to do, you are also becoming more aware of opportunities that are coming your way, and this could be take you out of your comfort zone. This pushes you to sometimes embrace change, and to start thinking in the long-term. <br><br>The last Three of Wands meaning is that of travel in search of what you are seeking. There is a sense of leaving home, a voyage that must be undertaken. Great things do not happen to those that simply wait for them, you must expand. For most readings, this shows that you may travel to a new land over the water and that you may find an opportunity during your travels.";

  const threeWandsImage = "resources/media/Wands03.jpg";

  const fourWandsDetail = "The overall meaning of the Four of Wands is that it heralds celebration as well as a harmonious, happy and relaxed home environment. In terms of numerology, the number four symbolizes stability as well as particularly reliable foundations. These are associated with a period of happiness and balance. The symbolism within the Four of Wands poses that this is the perfect time for you to get together with close people such as friends and family. This could be with or without any special occasion. Oftentimes the card is known to reflect a period of holidays when you are together with your friends and family for an extended period of time. It might also be suggesting for you to invite your closest friends for a great and intimate dinner and share a laugh or two.";

  const fourWandsImage = "resources/media/Wands04.jpg";

  const fiveWandsDetail = "From the image on the card, the symbolism in the Five of Wands suggests that there is form of conflict in one's life. This may be an existing conflict or one that is brewing and may eventually blow up in one's face. It may also depict a problem in communication, for example in a situation where no one really wants to listen to the other - meaning that no agreement or understanding takes place. <br><br>The five men may signify problems in a group of people who are not patient enough to listen to what anyone else is saying. They only want to be heard, and since none of the others will listen, they all argue at once. Much of this can be solved by the querent taking the first step to try and initiate communication in such a way that you suggest that everyone airs out what they have to say, one at a time. By doing this, you will be able to address the problem, and everyone will be heard. Meaning they'll all be satisfied. <br><br>The Five of Wands can also mean that you are or will be facing competition in an area that you are not used to. This can be at work or school where you will meet people with the same abilities as you who pose quite a challenge - leading to feelings of jealousy, greed, and envy. This tarot card encourages that you accept the competition as a way for you to improve yourself without feeling any malice towards them. This means that you should learn how to cope with them in a civil way.";

  const fiveWandsImage = "resources/media/Wands05.jpg";

  const sixWandsDetail = "This particular card is all about public recognition, victory, and success. Not only have you managed to properly succeed in achieving all of your goals, but you are also being publicly acknowledged for them and the results that you've managed to attain. You may have received an award or some sort of public acclaim. The card is indicative that you have managed to harness the strengths and talents that you have within you in an attempt to bring a particularly successful outcome in your life. You have managed to properly get through the confusion which is brought by the card before this one, the Five of Wands, and managed to properly minimize distractions, thus successfully focusing on your goals and achieving them. It's also worth noting that there is a slight downside apart from the overall positivity that stems from the card. It can bring self-importance as well as egotistical behavior and arrogance. This could make you think that nobody is better than you.";

  const sixWandsImage = "resources/media/Wands06.jpg";

  const sevenWandsDetail = "The Seven of Wands has a similar in meaning to the Five of Wands; both cards indicate struggles after the initial fulfillment and satisfaction of an event. The Seven of Wands however is different as it is is about the struggle that you need to go through to maintain your position, rather than to attain it. This is about the difficulties we face to continue to have success. You should be ready for the competition to you defend your title, and to prove yourself. Others are going to desire the same results that you do, so you need to stay ahead of the them. There will be challenges to the success of your project or venture from an outside source. You must remain dedicated to your desires, and with a clear purpose and effort, you will overcome them.";

  const sevenWandsImage = "resources/media/Wands07.jpg";

  const eightWandsDetail = "The image depicted by the Eight of Wands means that the difficulties that were brought by the Seven of Wands are finally over. It signifies a strong level of energy which states that different aspects of your life will be trailblazing. Perhaps important news will be coming on your way, and you may experience a sudden, yet steady positive growth. The Eight of Wands meaning may also pertain to your work. There is a chance that the decision that you are waiting for will come your way soon. <br><br>You need to be patient and just wait for it. When it comes to love, the eight of wands meaning pertains to your readiness to be committed on a relationship; however, the card advises you not to force the other party to also be ready on the commitment. Your significant other will soon be ready - forcing things to happen may affect the result negatively. In terms of finances, it appears like this is not the best time to make hasty investment. Just like in your love aspect, we advise you to be patient. Save your money and wait for the perfect time to invest. All things that you fought for are building in momentum. Where you didn't see progress earlier, you'll soon discover that they paved the way for the coming wave of action.";

  const eightWandsImage = "resources/media/Wands08.jpg";

  const nineWandsDetail = "The Nine of Wands tarot card is one that symbolizes great hope even when one is faced by many problems that threaten to make them lose their balance. The Nine of Wands symbolizes one's life, which has undergone too many trials but through their determination and will, they were able to overcome them. These won battles are symbolized by the eight upright wands; however, there are still more trials that the person may face. This can be one major trial or challenge that they are supposed to face for them to reach their goals or be successful in their quest. The card is a sign of hope and encouragement that you should face your trials with courage so that you may attain success. <br><br>The Nine of Wands may also mean that a person has been betrayed and has thus become mistrustful towards others. This may be because of something that has happened a number of times, and might on the first glance seem hopeless. But there is also hope and courage here, and the belief that this outlook is about to change. Someone or something may come into their life that will change their whole view of their past struggles. It encourages one to take that risky move because they may be surprised.";

  const nineWandsImage = "resources/media/Tarot_Nine_of_Wands.jpg";

  const tenWandsDetail = "This card shows that you have already completed the circle of struggle. After spending too many resources and lots of energy looking for success, you have finally overcome the obstacles. The sweat off your brow was worth it - your efforts have finally been rewarded. You may find yourself living in a world of abundance where poverty and suffering have no chance to intervene. Although it sounds marvelous and satisfying, the card depicts a lot of responsibilities on your side. You are now the sole problem solver in your circle of family and friends which could even propel you into another world of challenges. At this point, you are also flooded with responsibilities to maintain your success. The businesses that you have started are flourishing and keeping you on your toes. The main problem is that these issues could overwhelm you if you lose control, which requires you to make sure that you know how to prioritize and solve the relevant ones.";

  const tenWandsImage = "resources/media/Wands10.jpg";

  const pageWandsDetail = "When we see the Page of Wands, we see a youth with enormous excitement and curiosity for the world. He knows what to do, he has the passion to succeed, but due to his inexperience and maybe a little fear of the unknown, his ideas remain abstract. He identifies new worlds to explore, new opportunities he could take advantage of quite easily, and he is even gifted with the 'big picture' vision needed to succeed. Even with all of this, he still has the tendency to either remain dormant, or get easily distracted with one idea after the other. If he doesn't learn to control this, it might be that he squanders the opportunities to advance himself. <br><br>When you get the Page of Wands, it simply means something is within you, something that triggers you to make discoveries, indulge in investments or take the next advancement in life. You could be just about to take a move on a certain idea, but some conflicting messages keep coming to your mind, and you get discouraged. This card resembles your inner battles which are preventing you from expressing your heroism to the world, to let the world know that you exist for a reason.";

  const pageWandsImage = "resources/media/Wands11.jpg";

  const knightWandsDetail = "The Knight of Wands' symbolism is straightforward. When it appears, it means a great time to get away and travel. The person should feel charged up and full of life. One is also ready to get things done. He is adventurous and can find fun things to do no matter where he is. There is never a dull moment when the Knight of Wands is around. When the Knight of Wands shows up in a reading it seems to suggest that the seeker wants to complete important tasks. One wants to impress others with one's knowledge and skill. The card also shows up when the person is planning to move to another place of residence. If you are starting a creative project, then you should do so with lots of energy and enthusiasm. However, you should balance it with realistic and well-rounded views. You should also have a plan that takes into account the consequences of your actions.";

  const knightWandsImage = "resources/media/Wands12.jpg";

  const queenWandsDetail = "In general, the Queen of wands in a reading meaning may depict a person of extreme focus and fiery passion. She is courageous and individualistic, though at times she may appear self-centered. They have a positive and an uplifting energy; they represent someone who is willing to be by your side and stand up for you.";

  const queenWandsImage = "resources/media/Wands13.jpg";

  const kingWandsDetail = "The meaning of the upright position of the King of Wands represents pure energy. Unlike the other wands cards in the deck however, this particular one is not focused on pure creativity. Instead, this king is actually way more likely to take an idea and to decisively implement it himself. The King of Wands is a natural born leader of people, and he is also extremely capable. Once the king sets for himself a certain aim or a goal, he is going to conveniently stick to it in order to ensure that it becomes a reality.";

  const kingWandsImage = "resources/media/Wands14.jpg";

  const aceCupsDetail = "Getting the Ace of Cups upright shows that it's time to let loose of whatever emotional baggage you have and start living your life to the fullest. Like with all the other aces, there is a new beginning that is indicated here - a chance to start fresh. It might come in the form of opening yourself up to the possibilities of new relationships, romantic or otherwise, that have the ability to make you emotionally fulfilled. The release indicated by this card may either be spiritual or emotional, depending on what you are going through. The Ace of Cups may come to a reading after a long period of being lonely or enduring something that deeply hurt you emotionally, and it's appearance may be there to herald the turning over a new leaf.";

  const aceCupsImage = "resources/media/Cups01.jpg";

  const twoCupsDetail = "To see the Two of Cups is an indication of a partnership that is built on the union of forces, a strong connection and a balanced and equal partnership. The exchange of cups suggest that each party's emotions are intertwined with the other's, and each participant's feelings have profound affects on the other. A strong pair is indicated here, the joy of two becoming one.";

  const twoCupsImage = "resources/media/Cups02.jpg";

  const threeCupsDetail = "The meaning behind the Three of Cups represents a period of happiness. You will be able to forget the worries of your daily life and spend quality time with family and friends. To see the Three of Cups can indicate a happy reunion with a long lost friend, relative, or loved one. It can also mean a celebration, whether it is your own or for someone who you love. The event can be a birthday, wedding, or any other happy occasion. In general, it is about spending quality time with people you cherish in your life.";

  const threeCupsImage = "resources/media/Cups03.jpg";

  const fourCupsDetail = "The Four of Cups tend to appear when you are feeling discouraged and unmotivated. You may feel as if there is no solution or way forward in your situation. Life has become stagnant, and nothing seems to make you happy or passionate. You are feeling apathetic - regardless of what happens, whether the day is good or bad, none of it matters to you. The Four of Cups commands a self-evaluation of your attitude so that you can pull yourself out of this rut. The solution is likely right in front of you, the hand is offering you a way out, but you release yourself out of your mental stubbornness and deploy new approach.";
 
  const fourCupsImage = "resources/media/Cups04.jpg";

  const fiveCupsDetail = "The Five of Cups symbolizes disappointment, and the feelings that come when things go differently as you expected. You are feeling unhappy that a certain situation hasn't really turned out the way you have hoped it would. Instead of moving towards a more positive perspective, this card seems to say that you are dwelling in the past, inducing feelings of self-pity and regret. The water which is actually spilled from the cups shows that you might have missed an opportunity. It also shows that the problem is mostly emotional and not material or financial. <br><br>The meaning of the Five of Cups shows that you may have certain issues letting go of things which are in the past. What is more, it also shows that you are unwilling to learn from mistakes that you have already committed. The card is often going to reflect a person who is so caught up in his past that he is absolutely incapable of moving on. This means that he has a high chance of missing out on what new joys that the future can bring.";

  const fiveCupsImage = "resources/media/Cups05.jpg";

  const sixCupsDetail = "The Six of Cups upright generally represents generosity, naïve happiness, and childhood. It can stand for you wanting to return to a happier time, whether it was when you were a child, teenager, or young adult. Many times, these memories are things of the past, which reflect the aspects of ourselves that have vanished. You may feel that remembering these times is the only way to feel happy. The Six of Cups appearing in a reading seems to indicate that while we may look upon the past with a happy eye, we must avoid living in it. <br><br>The Six of Cups can also mean that you are be returning to a familiar place. This could be your hometown, an old friend's home, a school, or any place that holds a lot of meaning for you. You are seeking to reconnect with people from your past. Bringing back old memories reminds us of our childhood, a time when things were simpler. Coming after the Five of Cups, this card can also suggest that you may have suffered a loss or disappointment of sorts, and you are making the journey home. You are looking to the past to find the answer to the crisis or challenge that you are facing now. You may be seeking the comfort and warmth of people that unconditionally love you, gathering strength to face the trials that are in front of you.";

  const sixCupsImage = "resources/media/Cups06.jpg";

  const sevenCupsDetail = "To draw the Seven of Cups in a reading shows that you need to clearly see the shadows and visions in your imagination, not only in your dreams but also in the real world. You should be careful of wishful thinking and be alert of the choices that you make. In one sense, the Seven of Cups indicates that you are a dreamer who is both excited and afraid of the things that you see in your unconscious. <br><br>In another, the Seven of Cups is a reminder that although it is good to have dreams and wishes, it is even better to take action attaining those dreams. At one point in life, you will need to stop fantasizing and face the reality of life. If you are unable to make a decision due to the many options that are available, you should evaluate the advantages and disadvantages of each option so as to make the best choice. It is important to exercise caution when you are making your decision, as the card itself seems to show there is not only wonders and treasures that are available to you, but also monsters and shadows. There are some cases when the Seven of Cups may show that you are living in ways that are not necessarily grounded in real life - that your actions are guided by illusions that you feed yourself. Your ideas may be so up in the clouds, developed only on your imagination. As such, you will need to separate what is real and what is not so that you can make better choices.";

  const sevenCupsImage = "resources/media/Cups07.jpg";

  const eightCupsDetail = "The Eight of Cups signifies time for change or transition, by means of walking away from something. Just like a caterpillar has to die before transforming into a beautiful butterfly, we all need to transform ourselves in our lives from time to time. This is the case especially after being tired of living what was the day to day, and embarking on a journey that will help one have a deeper understanding about life in general. Getting the upright side of this card shows that you are dissatisfied with your life and need to experience a higher purpose in life. You may have been exploring your options, flitting about from one choice to another, tasting the wine in each cup, as a means to sort out what it is that you really want with your life. You are now experiencing a feeling of exhaustion - and are coming to a realization that you must step away from what is familiar. It is a choice, and a recognition that true happiness will not be found in what you have already created. More often than not, getting the Eight of Cups shows that one is tired of the worldly things and is about to embark on a much more spiritual journey. And if that's the case, then be happy, because change happens when we most need it.";

  const eightCupsImage = "resources/media/Cups08.jpg";

  const nineCupsDetail = "After a long journey, the Nine of Cups symbolizes the finding of self-satisfaction. The emotional journey of the cups is starting to come to a close after the volatile ups and downs you faced in the earlier numbers of this suit. You have struggled to find purpose and joy after loss, you have tasted the different things that life offers, and you have left comfort in order to find greater heights. Here, you have found them, and you are indulging yourself as you celebrate this new stage of your life. When we look at the Nine of Cups, it can initially seem like one of the most pleasant cards that may appear during a reading. This is also referred as the wish card, which means that the things that you desire for, or your most perfect dream is bound to happen. The Nine of Cups is normally associated with extreme happiness and satisfaction.";

  const nineCupsImage = "resources/media/Cups09.jpg";

  const tenCupsDetail = "From its joyful depiction, we can assume that the Ten of Cups embody happiness, joy, contentment and emotional satisfaction in your family, relationship or companion. It represents an idyllic state of comfort, harmony, peace and love which makes you feel like you are in paradise. This is where all your dreams, wants, needs and wishes have been fulfilled, and you feel a complete sense of satisfaction. Take a moment and breathe, look around you and be thankful for all your blessings. This card signifies something that so many of us are searching for. <br><br>To see the Ten of cups is to indicate a true emotional fulfillment - one where the lonely self-satisfaction of the Nine of Cups is shared with others to create a true sense of community and family. It is the crystallization of the innocent will of the ace of cups. After learning how to love oneself, the Nine of Cups matured into the Ten of Cups, which at its core about how true happiness stems from forging authentic bonds and connections with others. This card is most associated with a sense of 'happily ever after' - of family, of lasting harmony and peace.";

  const tenCupsImage = "resources/media/Cups10.jpg";

  const pageCupsDetail = "One of the most important meanings within the Page of Cups is that you should be open to new ideas, especially ones that stem from intuitive inspiration. The card seems to state that such inspiration should be embraced, despite it being something that you may not expect. It could lead you to adventure and open many doors. If it is a calling of a creative nature, for example, one to get into music or art, there's an especially strong push from this card to go for it. When you are being faced by difficult situations, and you have stopped chasing your dreams, the Page of Cups seems to say that you that you should tackle the issue from a totally different perspective. It symbolizes persistence as this is the only way that you can make your dreams come true. Listen to your intuition, follow your calling, and believe everything is possible.";

  const pageCupsImage = "resources/media/Cups11.jpg";

  const knightCupsDetail = "The truth is that the Knight of Cups is the most feminine amongst all the Knight cards in the tarot. It's important to note though, that this doesn't even slightly suggest that he is any less of a worthy knight. It implies that he is in proper touch with his emotions and his intuition, and that he uses them for his own well-being and during his many romance and seduction quests. He is usually quite attractive and charming to others, regardless of their gender. When faced with an actual decision, the Knight of Cups is going to listen to his heart, regardless of whether this is actually a logical choice or not. He can also manifest as an event or a person in your life, or a part of your own self. He appears as a messenger, and with him, he carries an invitation or an arrival of something or someone which is going to have a certain emotional benefit for you. As a knight, he is also charged with taking the gifts of his suit, and bringing it outward into the world. He therefore can also represent the undertaking of some project with significant emotional or creative value for you.";

  const knightCupsImage = "resources/media/Cups12.jpg";

  const queenCupsDetail = "We can understand the meaning of the Queen of Cups from taking a closer look at the woman in image. She is seen as compassionate, caring, sensitive, and nurturing. She connects with people on the emotional level, so people enjoy her honesty and fairness. The appearance of the Queen of Cups in a reading can be guiding you to find help from others. Most times, like the other queens, this is a female figure that will come into your life. The Queen of Cups has an intuition which is very powerful, and is only rivaled by the one of the High Priestess. <br><br>The Queen of Cups acts as a mirror and reflects the depths present in others, so they see themselves in a new light. Most times, the Queen of Cups can also represent the trusted inner voice you have within you. She seems to say that you should take the time to focus on your emotional health before trying to help others. Self-love creates compassion. The Queen of Cups normally thinks with her heart, instead of her mind. She can lack rationality and common sense, but she can also be intuitive, dreamy and almost psychic at times. The Queen of Cups could be the answer to your problems when a logical approach is not working.";

  const queenCupsImage = "resources/media/Cups13.jpg";

  const kingCupsDetail = "The King of Cups is one of the most influential cards in the suit of Cups. He represents creativity, emotion, and the unconscious. The card shows the ability to restrain one's emotions and be fully in charge of your feelings and impulses. Therefore, the King of Cups represents a balance between the intellect and emotions. He indicates that there is a strong relationship between understanding and feeling. When you have balanced your emotions and are able to control them, it means that you have a deeper knowledge and awareness of yourself. When you are faced with challenges that would normally throw you off balance, the King of Cups is there to remind you that you should act as he does - do not fly out in a rage, or immediately throw yourself into despair! You first need to temper the state of your emotions, so that you can progress forward in reality. Learn to evaluate yourself so as to determine how you can create a stronger awareness of your own internal state. There are instances when the King of Cups can symbolize an older male who is in your life. This is a mature man who is willing to take responsibility for his actions and has mastered his own self-understanding.";

  const kingCupsImage = "resources/media/Cups14.jpg";

  const aceSwordsDetail = "As with all the aces, the Ace of Swords indicates that one is about to experience a moment of breakthrough. With its sharp blade and representing the power of the intellect, this sword has the ability to cut through deception and find truth. In layman's terms, this card represents that moment in which one can see the world from a new point of view, as a place that is filled with nothing but new possibilities. It is, therefore, the best time to work on your goals - as the aces all give green lights, and are signals of waiting opportunities and new beginnings. It might also be a good time for you to seek justice and the truth in all matters since your conscience is clear, and your thoughts are swift. If you rise to the occasion, your sharpness and clarity in thought will be rewarded. When we look at the swords closely, and see its double-edge, we are also reminded that this sword may be either used for noble deeds or to deal destruction. It all depends on the wielder, and is a warning too that excessive power holds the danger to corrupt. If you stick with principles, the sword will serve you well.";

  const aceSwordsImage = "resources/media/Swords01.jpg";

  const twoSwordsDetail = "When we see the Two of Swords in a reading, we are encountering a stalemate. Two equal and opposing forces are joined in battle, and there seems to be no end in sight. This wasn't what you had in mind when you chanced to walk down this path, and you find yourself caught in the middle. Without something, or someone to intervene, this may continue indefinitely. We find ourselves in a situation where we must make a choice, we can side with one part of the situation, or we can side with the other. Neither seems particularly appealing, which makes the decision even more difficult. But unless we move past this stalemate, there can be no more progress. The Two of Swords meaning may depict a warning to have caution. Like the woman in the card, you may be choosing to keep the blindfold on, hoping the problem will just go away. You should avoid evading any issues that you are facing, since it will not solve your problems.";

  const twoSwordsImage = "resources/media/Swords02.jpg";

  const threeSwordsDetail = "The Three of Swords depicts the message of rejection, betrayal, hurt and discouragement. In moments like these, we are well served by the mind. If you can think logically about it and prepare for the experience, the impact of this pain may be minimized. But remember too, that pain and grief are a normal part of life, because they make us appreciate what joy and happiness we have, as well as teaching us. It is through pain that we learn to be avoid mistakes that could lead us into danger and grief. It is therefore a necessity in the journey of life. The Three of Swords therefore is a depiction of suffering that is meant to make us stronger, more careful and more vigilant. Sometimes life gives us no choice - we are knocked down. But what determines one's future is the choice of whether to remain knocked down, or rise again. Each little piece of suffering you encounter serves as a stepping stone to find a deeper meaning in this world.";

  const threeSwordsImage = "resources/media/Swords03.jpg";

  const fourSwordsDetail = "After the time of chaos, anger and pain depicted in the Three of Swords, the Four of Swords can signal that it is time to retreat. The Four of Swords is a moment of rest. Whether this is from a choice to withdraw, or whether it is from pure exhaustion, it is not clear. We are still tender from the wounds that were inflicted, and the battle weapons still hang above us as a grim reminder of what was lost. In order to continue and re-emerge in your daily life, you must take the time now to take a breather. There is always the faint fear that something more is bound to happen again and it is advisable that you take all chances to rest. The Four of Swords indicates it is time to gather new strength and prepare to face a new challenge. You have faced crisis after crisis, and it is wearing you out. You can face a new challenge only after getting away from everything and embracing a new atmosphere.";

  const fourSwordsImage = "resources/media/Swords04.jpg";

  const fiveSwordsDetail = "This card indicates that you are engaging in a conflict of some nature. It can also suggest a disagreement with others, which leads to hostility and tension. Despite the fact that you think you've won, you might still lose in the big picture, because you have annoyed or hurt those that you have argued with, and as a result, you are on the road to isolating yourself. Perhaps, at the moment, you believed that it was more important to be right rather than appreciate and understand where the other side was coming from. Right now, it's important to attempt to pick up the pieces. You still have the chance to act while the conflict is still fresh. You may feel as if everyone and everything is against you. You might also lose some friends along the way. This is why you will need to make a significant decision about your point of view. What is more important to you? Mutual progress, or winning? This might require you to stand up to a conflict within yourself. <br><br>The card represents ambition in a way which is rather negative. Too much ambition without actual regard to the consequences or the people that you affect is never something good. Misplaced ambition such as the one depicted by this card can leave you as a dejected loser or a callous winner, in both cases, the connotation is rather negative. This card instead asks us to be more considerate of those that we surround ourselves with, to let go of ego.";

  const fiveSwordsImage = "resources/media/Swords05.jpg";

  const sixSwordsDetail = "The meaning of the Six of Swords is that you are experiencing a transition of some kind, but one that is not happy and filled with regret. This transition will most likely be the result of decisions you made in the past, and now they are forcing you to leave something behind in order to move forward. Despite your sadness, you need to remember that moving on is the ideal option for your future. Life is filled with moments when you are going to be forced into letting go of things that you have become attached to. This will be challenging. The Six of Swords shows the sadness that you may be feeling, but you have to remember that the pain will not last, so you should look instead to the future for strength.";

  const sixSwordsImage = "resources/media/Swords06.jpg";

  const sevenSwordsDetail = "The Seven of Swords in general, is said to be about betrayal and deception. When you get this card, it may imply that you or someone else in your life is having difficulty getting away with something. There are instances when we are forced to be sneaky, hoping that we will not be discovered. When we are found out, we have to face the consequences - whether it's embarrassment, punishment, or worse. Sometimes this happens when there are instances when you had to think on your feet, and did something that was somewhat shrewd and out of character. Now there is a danger of the secret coming out. You may be tempted to sneak away from somewhere, indicating a situation that is no longer working as expected. Instead of dealing with it, you choose to sneak away and hope that you will go unnoticed. Perhaps you were hoping that this issue would just resolve itself over time, and you've neglected it - leaving it to only grow and get worse.";

  const sevenSwordsImage = "resources/media/Swords07.jpg";

  const eightSwordsDetail = "The general meaning in the Eight of Swords is that of a feeling of being trapped and victimized. You may feel powerless because, in your mind, you feel that changing the situation might be beyond you. This feeling of helplessness that you have, the feeling that you have no agency in your life, has played a major role in making your situation worse. Surrendering one's power to an unknown entity, whether it's fate, or God, the government or something else means that you are giving away your own personal responsibility to affect change. You have willingly relinquished the driver's seat in the journey of your own life, and it isn't going well for you. It is advisable for you to avoid making an important decision at this time since your judgment is likely clouded.'";

  const eightSwordsImage = "resources/media/Swords08.jpg";

  const nineSwordsDetail = "The Nine of Swords is often associated with fear and anxiety, about all the things that worry you and keep you up at night. Sometimes this card can be associated with trauma - one which may be shameful for you to confide with others about, and all the psychological responses that come from experiencing that trauma. When we are never released from the entrapment depicted in the Eight of Swords, we escalate into the Nine of Swords, where we are plagued by nightmares. The suit of swords is one that is concerned with the mind, with logic, with intelligence, and with communication, but somehow the Nine of Swords was caught on the destructive end of the mind, the one which turns inward on itself, multiplies and festers. <br><br>Questions are plaguing you, and you find yourself reciting all the possibilities - all the things that can happen to you. You are haunted by what could be. There is a sense of repetition within this card, that some event which has troubled you before, and one which you managed to either repress or run away from, is coming back again. Sharing your grief does at least provide an outlet for your pain and may release you from carrying this burden alone. Is there anyone that you can feel comfortable speaking to?";

  const nineSwordsImage = "resources/media/Swords09.jpg";

  const tenSwordsDetail = "The Ten of Swords indicate a major disaster of some sort. It shows that a certain force of extreme magnitude has come to hit you in your life - one that you may have not foreseen. There is a sense of betrayal that is indicated here, for the character is stabbed in the back. This seems to be a reminder that despite how much we try, we cannot control everything - there are things that are beyond our ability to change. Here, this situation is unavoidable. The tale of the suit of swords is a powerful metaphor, one that ends in tragedy. The swords are a symbol of the intellect, of intelligence and logic, and yet we find the final culmination of this suit a complete and total defeat of the spirit. We must realize that the swords are a weapon that can have immense potential for destruction or for good. The story as it unfolds from the ace to the ten is one where an untrained individual uses this weapon for faulty reasons - makes many mistakes, and then spends an entire lifetime attempting to run away from the power that he misused.";

  const tenSwordsImage = "resources/media/Swords10.jpg";

  const pageSwordsDetail = "Bright and alert, the Page of Swords is someone who never seems to run out of ideas. She is curious, always asking questions, and gifted with a sharp tongue and quick wit to match. Her aptitude for language also makes her an incredible communicator, and with her love of ideas, you may find her always engaged in some passionate debate. She seems to thrive on almost a kind of nervous energy, as if there was too much inside her to say, the wheels in her head always turning. As a news bearer, she may bring news that is represented by her suit - particularly, gossip, legal matters, agreements. Alternatively, you may find yourself required to use her energy - be alert, keep your eyes open and stay sharp and vigilant.";

  const pageSwordsImage = "resources/media/Swords11.jpg";

  const knightSwordsDetail = "When we are thoroughly obsessed by a certain idea and strongly wish to manifest it, we are oftentimes so blinded by the actual desire for its fulfillment that we fail to note the difficulties which we may come across, or the actions and consequences that it could bring. The Knight of Swords is a very powerful figure that is full of life as well as energy. This needs to be balanced with a proper and actual realization of compassion and responsibility. Once the knight sets forth towards his goals, there is absolutely no stopping him. He doesn't see - and he doesn't care - about any upcoming challenges. He is filled with sheer ambition, strength and determination to succeed with his quest no matter what. However, this determination could also blind him to see the potential consequences of his actions on others as he makes his way to success. He may charge forth into a very dangerous territory without preparation or actual foresight, and this could lead him to great danger.";

  const knightSwordsImage = "resources/media/Swords12.jpg";

  const queenSwordsDetail = "The Queen of Swords is an archetype of an older, wiser feminine intellect. She could be thought of as the most masculine of the all the queens, and may come off as quite stern and emotionless. This card represents the importance of making judgments without relying on emotion alone. The Queen of Swords beckons you to look at all the facts before making a decision. This queen does have compassion, which is why she has her hand reaching outwards in offering, but she wants to connect to people using an understanding that is intellectual.";

  const queenSwordsImage = "resources/media/Swords13.jpg";

  const kingSwordsDetail = "The King of Swords appearing in a reading suggests that you should remain objective in your current situation - you must establish truth by sticking to the facts. The King of Swords and his intellectual power implies that you will need to use your intellect to make your point known and attain your goals. Besides your experience and education, you should be sharp and observant, to see deeply into problems that come your way.";

  const kingSwordsImage = "resources/media/Swords14.jpg";

  const acePentaclesDetail = "The aces in the tarot are all indicative of new beginnings. When you draw any of them, it means that you are at a point in your life where a new cycle is beginning - you are about to start afresh. Because the suit of pentacles is primarily concerned with all things material (not just financial, but also with the sensual), this reset could manifest itself as a new career, the undertaking of a new venture, or the start of putting more care into your health. Wherever this beginning takes place, the Ace of Pentacles assures that what is to come will bring great abundance and opportunity. ";

  const acePentaclesImage = "resources/media/Pents01.jpg";

  const twoPentaclesDetail = "The Two of Pentacles is a card about balance - the coins are displayed in a manner that is precarious, any small change in wind or weight can tip and send them falling. For those that may have more coins to go around, they can afford to be less careful, but at this moment things may be tight. Wealth too, is a kind of energy, and it is the kind whose goings in and goings out are easiest and most tangible to see. When it comes to love, the Two of Pentacles is associated with your inability to provide the energy and time required to make your partner happy. Your partnership should be your main priority, but with all the madness in other areas of your life, you are finding it hard to devote your attention to your loved ones.";

  const twoPentaclesImage = "resources/media/Pents02.jpg";

  const threePentaclesDetail = "The threes in the tarot represent the successful completion of a goal - it takes the sources of energy in the ace and the twos and adds a foundational factor, and usually involves a group of some sort. In this scenario, the upright three of pentacles meaning is that there is a successful achievement of all the requirements to pursue your business, deal, venture or any other kind of endeavor. Successful projects usually require different kinds of expertise, and at this moment, the Three of Pentacles means that all the skills required are coming together. In short, you are enjoying enjoying working together as part of a team, and also in the initial success of this bigger project.";

  const threePentaclesImage = "resources/media/Pents03.jpg";

  const fourPentaclesDetail = "The Four of Pentacles card is capable of generating both negative and positive perceptions. On one hand, the card signifies that you have successfully managed to accomplish much of your goals and you have managed to attain a significant material wealth in the process. However, on the other hand, there is a significant chance that you will start valuing things only for their material worth. You have worked hard to get to the point where you are now, and it is absolutely natural for your to desire to make sure that you remain stable. But this also has a chance to turn you into an overly possessive or greedy person who wants to ensure that no one is capable of taking away your own wealth.";

  const fourPentaclesImage = "resources/media/Pents04.jpg";

  const fivePentaclesDetail = "Whenever the Five of Pentacles shows up in a reading, it suggests a time of hardship and insecurity. The meaning of this card can be deep loneliness, illness, poverty or loss. Your status might take a turn for the worse in the near future. There is a chance that you will lose something significant, whether it is financial wealth or an important item. Deterioration of your health might be already ongoing or be very sudden. The person with crutches has a lot of symbolism. This person may be feeling cursed - that their bad luck is something that they can't shake off easily. The Five of Pentacles symbolism can also be that of old debts, high credit card balances, or unpaid loans. It is a reminder that you should consider sorting out your finances. Mistakes you have made in the past might also haunt you.";

  const fivePentaclesImage = "resources/media/Pents05.jpg";

  const sixPentaclesDetail = "The Six of Pentacles means is that you are in a position where you have a good relationship with your income. Like the main figure in the card, the amount of money that you bring in and your expenses are balanced well, and you are fortunate enough to not have any stress. You are also grateful for all that you own and can happily share your wealth with others. As you can tell from the imagery in the card, the Six of Pentacles can be about charity. You can either be the man giving away money to the needy, or a beggar gratefully receiving what you need from wealthy donor.";

  const sixPentaclesImage = "resources/media/Pents06.jpg";

  const sevenPentaclesDetail = "The meaning of the Seven of Pentacles relates to investment and effort. It follows the Six of Pentacles which refers to the end of financial or material hardship. If you have been putting in time and effort in your work, it signifies that your efforts are paying off and they are going to pay off in the future as well. If you are looking to invest, the Seven of Pentacles suggests that you are ready to put in a lot of effort, time and work into whatever you want to achieve. It reaffirms you of your long-term vision and helps to show that you are not confined to seeing results in the short term only. It shows how much you value the investment because of the effort that you are willing to put in. <br><br>The Seven of Pentacles is also related to fear of failure. You do not know whether you are going to reap fruit from your hard work. It could also signify frustration when there is a delay. You may have been putting a lot of effort into your projects, but it does not seem to bear any fruit right now. The good thing is that it means that you are learning from your failures and mistakes. It may initially not seem like it, but mistakes allow you to look into how to better invest your time to get the most out of your future ventures.";

  const sevenPentaclesImage = "resources/media/Pents07.jpg";

  const eightPentaclesDetail = "This card indicates a time that you have to work hard and focus entirely on your tasks. This is not necessarily a negative situation, but this means that you must really strive to be the best. The task that you need to accomplish can be personal or professional. No matter what type of task it is, do not be afraid to ask for help when things get overwhelming. The Eight of Pentacles refers to the efforts that you undertake. There is a possibility that there will be a lot of things that you need to address. Hard work is essential, but you still need to find a balance.";

  const eightPentaclesImage = "resources/media/Pents08.jpg";

  const ninePentaclesDetail = "This Nine of Pentacles card indicates that the querent has reached a stage in their lives where they are confident, independent and self-sufficient. Through hard work, this person is now ready to enjoy money, leisure and material comfort. The difficulties that were faced in the earlier journey of the pentacles appear to be over. The Nine of Pentacles conveys not only joy, but also the feeling of security and freedom that material wealth can bring. Looking back, the querent can now celebrate the difficulties, the struggles, and the hard work that lined her path. Her previous challenges gave her the wider perspective she needs to understand the spiritual value of her success. Knowing how difficult it was to get here, she intends to enjoy every single day that is given to her.";

  const ninePentaclesImage = "resources/media/Pents09.jpg";

  const tenPentaclesDetail = "The Ten of Pentacles deals with permanence and satisfaction. The card shows that everything you have put your efforts into for a long time will pay off in the future. It suggests that everything will work out well in the end - for you have always kept the long term picture in view, choosing to take no shortcuts. Your legacy is sure to stand for quite a long time to come. This is a relief, for the path to get here has been filled with setbacks and challenges, making this point of the journey even sweeter.";

  const tenPentaclesImage = "resources/media/Pents10.jpg";

  const pagePentaclesDetail = "When we meet the Page of Pentacles, we see immediately that she is one that is ambitious and focused. She is protected, nourished, provided for by the suit whose name she bears. Guided by it, she is deeply tied to the earth, nature, and all of its gifts. She cherishes the body, for it too is something which is a manifestation of her element. Her diligence, ambition and loyalty drives her to quickly make plans for the future - for it is there where her focus lies.";

  const pagePentaclesImage = "resources/media/Pents11.jpg";

  const knightPentaclesDetail = "The Knight of Pentacles is about the daily tasks and the responsibility that one has to gain through a specific project. This knight has the patience to accomplish all his given duties and is considered by others reliable and committed to his work. To see this card is an indication that there is a need to be trustworthy and reliable. You are fully committed to your assignments and you make sure that you complete your work efficiently. <br><br>You are absolutely loyal and do the best you can in order to make sure the job will be properly completed. Though your sense of duty is admirable, beware that it does not turn into perfectionism - which can manifest itself in every aspect of your life. The Knight of Pentacles can also represent routine, or the kind of general hard work that you go through everyday. The meaning of the Knight of Pentacles also advises that the querent should continue to do exactly what he is doing. Sticking with the tried and true methods, he will accomplish everything he has set out to do. Sometimes, going with what has already done is not necessarily bad.";

  const knightPentaclesImage = "resources/media/Pents12.jpg";

  const queenPentaclesDetail = "The Queen of Pentacles represents both a down-to-earth woman who plays many roles to ensure that she keeps her family happy. She knows how and when to show love - keeping an orderly home, cooking comforting meals and takes care of the children. But do not mistake her for being only a homebody - alongside all these motherly attributes, she can plan business ventures and execute her plans successfully. It is through her naturally talented business sense that she is surrounded by such luxury. She is quiet and does not like disclosing her financial accounts, fearing that it could bring more complexity to her life, which she desires to keep rather simple. She may have a secret bank account that nobody knows about - for she may choose to be careful, vigilant and self-sufficient.";

  const queenPentaclesImage = "resources/media/Pents13.jpg";

  const kingPentaclesDetail = "When we meet the King of Pentacles, we feel immediately his regal and generous presence. He is a provider and a protector, for under his care is a flourishing and abundant kingdom where its citizens are prosperous and encouraged to grow. He is naturally responsible and reliable, and through the wisdom granted to him by his suit, he has grown all that he has acquired from practically nothing. To see him in the cards is to envision success - one that was won by earnest work.";

  const kingPentaclesImage = "resources/media/Pents14.jpg";

const cardDescriptions = [foolDetail, magicianDetail, highPriestessDetail, empressDetail, emperorDetail, hierophantDetail, loversDetail, chariotDetail, strengthDetail, hermitDetail, wheelOfFortuneDetail, justiceDetail, hangedManDetail, deathDetail, temperanceDetail, devilDetail, towerDetail, starDetail, moonDetail, sunDetail, judgementDetail, worldDetail, aceWandsDetail, twoWandsDetail, threeWandsDetail, fourWandsDetail, fiveWandsDetail, sixWandsDetail, sevenWandsDetail, eightWandsDetail, nineWandsDetail, tenWandsDetail, pageWandsDetail, knightWandsDetail, queenWandsDetail, kingWandsDetail, aceCupsDetail, twoCupsDetail, threeCupsDetail, fourCupsDetail, fiveCupsDetail, sixCupsDetail, sevenCupsDetail, eightCupsDetail, nineCupsDetail, tenCupsDetail, pageCupsDetail, knightCupsDetail, queenCupsDetail, kingCupsDetail, aceSwordsDetail, twoSwordsDetail, threeSwordsDetail, fourSwordsDetail, fiveSwordsDetail, sixSwordsDetail, sevenSwordsDetail, eightSwordsDetail, nineSwordsDetail, tenSwordsDetail, pageSwordsDetail, knightSwordsDetail, queenSwordsDetail, kingSwordsDetail, acePentaclesDetail, twoPentaclesDetail, threePentaclesDetail, fourPentaclesDetail, fivePentaclesDetail, sixPentaclesDetail, sevenPentaclesDetail, eightPentaclesDetail, ninePentaclesDetail, tenPentaclesDetail, pagePentaclesDetail, knightPentaclesDetail, queenPentaclesDetail, kingPentaclesDetail];

const cardImages = [foolImage, magicianImage, highPriestessImage, empressImage, emperorImage, hierophantImage, loversImage, chariotImage, strengthImage, hermitImage, wheelOfFortuneImage, justiceImage, hangedManImage, deathImage, temperanceImage, devilImage, towerImage, starImage, moonImage, sunImage, judgementImage, worldImage, aceWandsImage, twoWandsImage, threeWandsImage, fourWandsImage, fiveWandsImage, sixWandsImage, sevenWandsImage, eightWandsImage, nineWandsImage, tenWandsImage, pageWandsImage, knightWandsImage, queenWandsImage, kingWandsImage, aceCupsImage, twoCupsImage, threeCupsImage, fourCupsImage, fiveCupsImage, sixCupsImage, sevenCupsImage, eightCupsImage, nineCupsImage, tenCupsImage, pageCupsImage, knightCupsImage, queenCupsImage, kingCupsImage, aceSwordsImage, twoSwordsImage, threeSwordsImage, fourSwordsImage, fiveSwordsImage, sixSwordsImage, sevenSwordsImage, eightSwordsImage, nineSwordsImage, tenSwordsImage, pageSwordsImage, knightSwordsImage, queenSwordsImage, kingSwordsImage, acePentaclesImage, twoPentaclesImage, threePentaclesImage, fourPentaclesImage, fivePentaclesImage, sixPentaclesImage, sevenPentaclesImage, eightPentaclesImage, ninePentaclesImage, tenPentaclesImage, pagePentaclesImage, knightPentaclesImage, queenPentaclesImage, kingPentaclesImage];

/* allows cards to be flipped*/
let tarotCard1 = document.getElementById('card1');
let tarotCard2 = document.getElementById('card2');
let tarotCard3 = document.getElementById('card3');
let tarotCard4 = document.getElementById('card4');
let tarotCard5 = document.getElementById('card5');

/*allows button to reset cards and re-randomize*/
let button = document.getElementById('button');

//Get first card
function genCard1() {
   return cardName[Math.floor(Math.random()*cardName.length)];
}
let card1 = genCard1();
const cardNames2 = cardName.filter(card => card !== card1);

//Get second card
function genCard2() {
   return cardNames2[Math.floor(Math.random()*cardNames2.length)];
}
let card2 = genCard2();
const cardNames3 = cardNames2.filter(card => card !== card2);

//Get third card
function genCard3() {
   return cardNames3[Math.floor(Math.random()*cardNames3.length)];
}
let card3 = genCard3();
const cardNames4 = cardNames3.filter(card => card !== card3);

//Get fourth card
function genCard4() {
   return cardNames4[Math.floor(Math.random()*cardNames4.length)];
}
let card4 = genCard4();
const cardNames5 = cardNames4.filter(card => card !== card4);

//Get fifth card
function genCard5() {
   return cardNames5[Math.floor(Math.random()*cardNames5.length)];
}
let card5 = genCard5();

let reset = () => {
  tarotCard1.style = '';
  tarotCard2.style = '';
  tarotCard3.style = '';
  tarotCard4.style = '';
  tarotCard5.style = '';
  document.getElementById('cardTitle').innerHTML = '';
  document.getElementById('cardDetail').innerHTML = '';
  document.getElementById('subtitle').innerHTML = '';

  genCard1();
  genCard2();
  genCard3();
  genCard4();
  genCard5();
}
button.onclick = reset;
document.onload = reset;

let openDetail1 = () => {
   document.getElementById('cardTitle').innerHTML = card1;
   document.getElementById('cardDetail').innerHTML = cardDescriptions[cardName.indexOf(card1)];
   document.getElementById('cardImageLink1').src = cardImages[cardName.indexOf(card1)];
   document.getElementById('subtitle').innerHTML = 'Aspirations';
}

const flip1 = () => {
   tarotCard1.style.transform = 'rotateY(-180deg)';
}
tarotCard1.addEventListener('click', () => {
   flip1();
   openDetail1();
});

let openDetail2 = () => {
   document.getElementById('cardTitle').innerHTML = card2;
   document.getElementById('cardDetail').innerHTML = cardDescriptions[cardName.indexOf(card2)];
   document.getElementById('cardImageLink2').src = cardImages[cardName.indexOf(card2)];
   document.getElementById('subtitle').innerHTML = 'The Past';
}


const flip2 = () => {
   tarotCard2.style.transform = 'rotateY(-180deg)';
}
tarotCard2.addEventListener('click', () => {
   flip2();
   openDetail2();
});

let openDetail3 = () => {
   document.getElementById('cardTitle').innerHTML = card3;
   document.getElementById('cardDetail').innerHTML = cardDescriptions[cardName.indexOf(card3)];
   document.getElementById('cardImageLink3').src = cardImages[cardName.indexOf(card3)];
   document.getElementById('subtitle').innerHTML = 'The Present';
}


const flip3 = () => {
   tarotCard3.style.transform = 'rotateY(-180deg)';
}
tarotCard3.addEventListener('click', () => {
   flip3();
   openDetail3();
});

let openDetail4 = () => {
   document.getElementById('cardTitle').innerHTML = card4;
   document.getElementById('cardDetail').innerHTML = cardDescriptions[cardName.indexOf(card4)];
   document.getElementById('cardImageLink4').src = cardImages[cardName.indexOf(card4)];
   document.getElementById('subtitle').innerHTML = 'The Future';
}


const flip4 = () => {
   tarotCard4.style.transform = 'rotateY(-180deg)';
}
tarotCard4.addEventListener('click', () => {
   flip4();
   openDetail4();
});

let openDetail5 = () => {
   document.getElementById('cardTitle').innerHTML = card5;
   document.getElementById('cardDetail').innerHTML = cardDescriptions[cardName.indexOf(card5)];
   document.getElementById('cardImageLink5').src = cardImages[cardName.indexOf(card5)];
   document.getElementById('subtitle').innerHTML = 'Obstacle';
}


const flip5 = () => {
   tarotCard5.style.transform = 'rotateY(-180deg)';
}
tarotCard5.addEventListener('click', () => {
   flip5();
   openDetail5();
});
