// CoC 5.2.4 OfflineMode

const base = Module.findBaseAddress("libg.so");

const OfflineModeePtr = 0x2F728C;  // _ZN12LogicDefines12OFFLINE_MODEE
const TestNamePtr = 0x2BAECD;
const TestAlliancePtr = 0x2B05E6;
const MattiIiPtr = 0x2B1F9B;
const MissPresidentPtr = 0x2B610F;
const LandOfArchersPtr = 0x2B611E;
const AttackTheArchersClanMsgPtr = 0x2B612E;
const PresidentOfGoblinsPtr = 0x2B075A;
const TheChiefPresidentPtr = 0x2B07D6;
const ArmyOfBarbariansPtr = 0x2B07EA;
const AlliancePtr = 0x2B08BA;
const TestMemberPtr = 0x2B08E3;
const AllianceDescriptionTextPtr = 0x2B08F2;

const OfflineModee = base.add(OfflineModeePtr);
const TestName = base.add(TestNamePtr);
const TestAlliance = base.add(TestAlliancePtr);
const MattiIi = base.add(MattiIiPtr);
const MissPresident = base.add(MissPresidentPtr);
const LandOfArchers = base.add(LandOfArchersPtr);
const AttackTheArchersClanMsg = base.add(AttackTheArchersClanMsgPtr);
const PresidentOfGoblins = base.add(PresidentOfGoblinsPtr);
const TheChiefPresident = base.add(TheChiefPresidentPtr);
const ArmyOfBarbarians = base.add(ArmyOfBarbariansPtr);
const AlliancesNames = base.add(AlliancePtr);
const TestMember = base.add(TestMemberPtr);
const AllianceDescriptionText = base.add(AllianceDescriptionTextPtr);

function OfflineModeStrProt() {
    Memory.protect(TestName, 11, "rwx"); 
    Memory.protect(TestAlliance, 11, "rwx");
	Memory.protect(MattiIi, 11, "rwx");
	Memory.protect(MissPresident, 11, "rwx");
	Memory.protect(LandOfArchers, 11, "rwx");
	Memory.protect(AttackTheArchersClanMsg, 11, "rwx");
	Memory.protect(PresidentOfGoblins, 11, "rwx");
	Memory.protect(TheChiefPresident, 11, "rwx");
	Memory.protect(ArmyOfBarbarians, 11, "rwx");
	Memory.protect(AlliancesNames, 11, "rwx");
	Memory.protect(TestMember, 11, "rwx");
	Memory.protect(AllianceDescriptionText, 11, "rwx");
}

function OfflineMode() {
    TestName.writeUtf8String("Solar"); // Test Name
    TestAlliance.writeUtf8String("SolarClan"); // Test Alliance
	MattiIi.writeUtf8String("Solar"); // Acceptor Name
	MissPresident.writeUtf8String("RoyaleDev"); // Kick Message Leader Name
	LandOfArchers.writeUtf8String("RoyaleDev Clan"); // Kick Message Leader Clan
	AttackTheArchersClanMsg.writeUtf8String("Attack the RoyaleDev Clan! We need dragons and P.E.K.K.A's to defeat them.");  // Attack Msg
	PresidentOfGoblins.writeUtf8String("Solar");  // Name
	TheChiefPresident.writeUtf8String("TheSolarChief"); // Sender Mail Msg Name
	ArmyOfBarbarians.writeUtf8String("SolarClan");  // Sender Mail Msg Alliance
	AlliancesNames.writeUtf8String("SolarClan %i"); // All Alliances Names
	TestMember.writeUtf8String("SolarBot %i"); // Test Member
	AllianceDescriptionText.writeUtf8String("Welcome to the SolarLand!"); // Alliance Description Text

	OfflineModee.writeU8(1); // 0 = ConnectToProd, 1 = OfflineMode
}

function init() {
	OfflineModeStrProt();
    OfflineMode();
}

rpc.exports.init = init;
