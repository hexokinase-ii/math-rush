import { Interests } from '/imports/api/interest/InterestCollection';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { AddSubtract } from '/imports/api/profile/AddSubtractCollection';

Interests.publish();
Profiles.publish();
AddSubtract.publish();
